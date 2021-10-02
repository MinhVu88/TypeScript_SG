"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classDecor = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeysEnum_1 = require("../../MetadataKeysEnum");
function validateRequestBody(data) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send("\n        <div>\n          <h1>Email & password are required</h1>\n          <a href=\"/auth/login\">Login</a>\n        </div>\n      ");
            return;
        }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var value = data_1[_i];
            if (!req.body[value]) {
                res.status(422).send("\n          <div>\n            <h1>Invalid Credentials</h1>\n            <a href=\"/auth/login\">Login</a>\n          </div>\n        ");
                return;
            }
        }
        next();
    };
}
/*
- The classDecor decorator is applied to a class.

- It iterates over the properties of that class's prototype (those properties
  are the class's methods).

- It checks to see if those methods have any metadata associated with them.

- If they do, it'll associate that metadata info with some Express router.
*/
function classDecor(routePrefix) {
    // the arg that's passed to the decorator function applied to a class is a constructor function
    // the arg that's passed to the decorator applied to a class's method is that class's prototype
    return function (constructor) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var method in constructor.prototype) {
            var routeHandler = constructor.prototype[method];
            var path = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeys.path, constructor.prototype, method);
            var httpRequest = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeys.method, constructor.prototype, method);
            // if a route handler has no middleware in it, middlewareFunctions is undefined
            // in that case, middlewareFunctions is assigned an empty array.
            var middlewareFunctions = Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeys.middleware, constructor.prototype, method) || [];
            var validatedReqBodyData = validateRequestBody(Reflect.getMetadata(MetadataKeysEnum_1.MetadataKeys.reqBodyValidation, constructor.prototype, method) || []);
            /*
            - Not all methods in the class's prototype are route handlers.
      
            - Methods that aren't route handlers don't have the path metadata key stored in them.
      
            - Thus, if "path" is found in a method, that's a route handler,
              which can be associated with Express router.
            */
            if (path) {
                // without the HttpRequests enum, router[httpRequest] generates an error
                // the reason for that is explained in vid 247
                router[httpRequest].apply(router, __spreadArray(__spreadArray([routePrefix.concat(path)], middlewareFunctions), [validatedReqBodyData,
                    routeHandler]));
            }
        }
    };
}
exports.classDecor = classDecor;
