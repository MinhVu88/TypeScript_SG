import { Request, Response, NextFunction } from 'express';
import { get, post, classDecor, use, reqBodyValidation } from './decorators';

interface ExtendedRequest extends Request {
  body: {[key: string]: string | undefined}
};

const requireAuth = (
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {
  if (req.session && req.session.isLoggedIn) {
    next();

    return;
  }

  res.status(403);

  res.send(`
    <div>
      <h1>Access Denied</h1>
      <a href="/auth/login">Login</a>
    </div>
  `);
};

@classDecor('/auth')
class AuthControllers {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <div>
        <h1>Section 16: Express & TypeScript Integration | Implementation 2</h1>
        <form method="POST">
          <div>
            <label>Email</label>
            <input name="email"/>
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password"/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    `);
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send(`
      <div>
        <h1>Welcome to the protected route, logged-in user</h1>
        <a href="/">Back Home</a>
      </div>
    `);
  }

  @post('/login')
  @reqBodyValidation('email', 'password')
  postLogin(req: ExtendedRequest, res: Response): void {
    const {email, password} = req.body;

    if(email === 'method2@sec16.server' && password === '1234') {
      // mark user as logged-in using the cookie-session middleware
      req.session = {isLoggedIn: true};

      // redirect user back to the root route
      res.redirect('/');
    }else {
      res.send(`
        <div>
          <h1>Invalid Credentials</h1>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response): void {
    req.session = undefined;

    res.redirect('/');
  }
}