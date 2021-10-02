import 'reflect-metadata';
import { RequestHandler } from 'express';
import { HttpRequests } from '../../HttpRequestsEnum';
import { MetadataKeys } from '../../MetadataKeysEnum';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
};

// the bindRoute function returns a decorator factory
function bindRoute(httpRequest: string): Function {
  return function(path: string): Function {
    return function(
      target: any,
      propertyKey: string,
      properyDescriptor: RouteHandlerDescriptor
    ): void {
      const metadataValue1 = path;
      const metadataValue2 = httpRequest;

      Reflect.defineMetadata(
        MetadataKeys.path, 
        metadataValue1, 
        target, 
        propertyKey
      );

      Reflect.defineMetadata(
        MetadataKeys.method, 
        metadataValue2, 
        target, 
        propertyKey
      );
    };
  };
}

export const get = bindRoute(HttpRequests.get); 
export const post = bindRoute(HttpRequests.post); 
export const put = bindRoute(HttpRequests.put); 
export const del = bindRoute(HttpRequests.del); 
export const patch = bindRoute(HttpRequests.patch); 