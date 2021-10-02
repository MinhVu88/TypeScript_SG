import { Router, Request, Response, NextFunction } from 'express';

interface ExtendedRequest extends Request {
  body: {[key: string]: string | undefined}
};

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.isLoggedIn) {
    next();

    return;
  }

  res.status(403);

  res.send(`
    <div>
      <h1>Access Denied</h1>
      <a href="/login">Login</a>
    </div>
  `);
};

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Section 14: Express & TypeScript Integration | Implementation 1</h1>
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
});

router.post('/login', (req: ExtendedRequest, res: Response) => {
  const {email, password} = req.body;

  if(email && password && email === 'method1@sec14.server' && password === '1234') {
    // mark user as logged-in using the cookie-session middleware
    req.session = {isLoggedIn: true};

    // redirect user back to the root route
    res.redirect('/');
  }else {
    res.send(`
      <div>
        <h1>Invalid Credentials</h1>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get('/', (req: Request, res: Response) => {
  // use cookie-session to determine whether user is logged in
  if (req.session && req.session.isLoggedIn) {
    res.send(`
      <div>
        <h1>You're logged in</h1>
        <a href="/logout">Logout</a> |
        <a href="/protected">Protected</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <h1>You're logged out</h1>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;

  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send(`
      <div>
        <h1>Welcome to the protected route, logged-in user</h1>
        <a href="/">Back Home</a>
      </div>
    `);
});

export { router };