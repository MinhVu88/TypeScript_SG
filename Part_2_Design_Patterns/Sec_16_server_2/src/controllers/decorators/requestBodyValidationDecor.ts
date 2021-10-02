import 'reflect-metadata';
import { MetadataKeys } from '../../MetadataKeysEnum';

export function reqBodyValidation(...data: string[]): Function {
  return function(
    target: any,
    propertyKey: string,
    properyDescriptor: PropertyDescriptor
  ): void {
    Reflect.defineMetadata(
      MetadataKeys.reqBodyValidation,
      data,
      target,
      propertyKey
    );
  };
}