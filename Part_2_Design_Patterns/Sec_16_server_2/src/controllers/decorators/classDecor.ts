import 'reflect-metadata';
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { AppRouter } from '../../AppRouter';
import { HttpRequests } from '../../HttpRequestsEnum';
import { MetadataKeys } from '../../MetadataKeysEnum';

function validateRequestBody(data: string[]): RequestHandler {
  return function(
    req: Request, 
    res: Response, 
    next: NextFunction
  ): void {
    if(!req.body) {
      res.status(422).send(`
        <div>
          <h1>Email & password are required</h1>
          <a href="/auth/login">Login</a>
        </div>
      `);

      return;
    }

    for(let value of data) {
      if(!req.body[value]) {
        res.status(422).send(`
          <div>
            <h1>Invalid Credentials</h1>
            <a href="/auth/login">Login</a>
          </div>
        `);

        return;
      }
    }

    next();
  }
}

/*
- The classDecor decorator is applied to a class.

- It iterates over the properties of that class's prototype (those properties
  are the class's methods).

- It checks to see if those methods have any metadata associated with them.

- If they do, it'll associate that metadata info with some Express router. 
*/
export function classDecor(routePrefix: string): Function {
  // the arg that's passed to the decorator function applied to a class is a constructor function
  // the arg that's passed to the decorator applied to a class's method is that class's prototype
  return function(constructor: Function): void {
    const router = AppRouter.getInstance();

    for(let method in constructor.prototype) {
      const routeHandler = constructor.prototype[method];

      const path = Reflect.getMetadata(
        MetadataKeys.path, 
        constructor.prototype, 
        method
      );

      const httpRequest: HttpRequests = Reflect.getMetadata(
        MetadataKeys.method, 
        constructor.prototype, 
        method
      );

      // if a route handler has no middleware in it, middlewareFunctions is undefined
      // in that case, middlewareFunctions is assigned an empty array.
      const middlewareFunctions = Reflect.getMetadata(
        MetadataKeys.middleware,
        constructor.prototype,
        method
      ) || [];
      
      const validatedReqBodyData = validateRequestBody(
        Reflect.getMetadata(
          MetadataKeys.reqBodyValidation,
          constructor.prototype,
          method
        ) || []
      );

      /*
      - Not all methods in the class's prototype are route handlers.

      - Methods that aren't route handlers don't have the path metadata key stored in them.

      - Thus, if "path" is found in a method, that's a route handler, 
        which can be associated with Express router.
      */
      if(path) {
        // without the HttpRequests enum, router[httpRequest] generates an error
        // the reason for that is explained in vid 247
        router[httpRequest](
          routePrefix.concat(path),
          ...middlewareFunctions,
          validatedReqBodyData, 
          routeHandler
        );
      }
    }
  };
}