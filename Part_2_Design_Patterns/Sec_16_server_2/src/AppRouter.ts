/* This class is a Singleton. More about Singleton design pattern:

- https://refactoring.guru/design-patterns/singleton

- https://sourcemaking.com/design_patterns/singleton

- https://wanago.io/2019/11/11/javascript-design-patterns-1-singleton-and-the-module/

- https://www.dofactory.com/javascript/design-patterns/singleton

- https://www.sitepoint.com/javascript-design-patterns-singleton/
*/
import express from 'express';

export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if(!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}