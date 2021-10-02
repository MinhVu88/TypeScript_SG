import { Request, Response, NextFunction } from 'express';
import { classDecor, get } from './decorators';

@classDecor('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response): void {
    // use cookie-session to determine whether user is logged in
    if (req.session && req.session.isLoggedIn) {
      res.send(`
        <div>
          <h1>You're logged in</h1>
          <a href="/auth/logout">Logout</a> |
          <a href="/auth/protected">Protected</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <h1>You're logged out</h1>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }
}