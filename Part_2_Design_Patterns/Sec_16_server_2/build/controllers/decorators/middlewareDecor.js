"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKeysEnum_1 = require("../../MetadataKeysEnum");
function use(middleware) {
    return function (target, propertyKey, properyDescriptor) {
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
        var middlewareFunctions = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeys.middleware, target, propertyKey) || [];
        middlewareFunctions.push(middleware);
        Reflect.defineMetadata(MetadataKeysEnum_1.MetadataKeys.middleware, middlewareFunctions, target, propertyKey);
    };
}
exports.use = use;
