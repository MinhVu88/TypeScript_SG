import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from '../../MetadataKeysEnum';

export function use(middleware: RequestHandler): Function {
  return function(
    target: any,
    propertyKey: string,
    properyDescriptor: PropertyDescriptor
  ): void {
    /*
    - Initially, before any middleware is stored in the middleware metadata key 
      of a given method, on which the use decorator is used,
      the metadata key is assigned an emtpy array as its value. 
    
    - When the 1st middleware is created & passed to use, it's added to the array.

    - Subsequently the middleware metadata key's value contains middleware functions.

    - Thus, the use decorator can be called multiple times, each time with a distinct
      middleware function available in the array.

    - In short, if the use decorator is never called, the array is always empty.
    */
    const middlewareFunctions = Reflect.getMetadata(
      MetadataKeys.middleware,
      target,
      propertyKey
    ) || [];

    middlewareFunctions.push(middleware);

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      middlewareFunctions,
      target,
      propertyKey
    );
  };
}