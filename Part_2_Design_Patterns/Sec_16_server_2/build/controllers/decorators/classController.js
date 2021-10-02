"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classDecor = exports.router = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
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
        for (var method in constructor.prototype) {
            var metadataKey = 'path';
            var routeHandler = constructor.prototype[method];
            var path = Reflect.getMetadata(metadataKey, constructor.prototype, method);
            if (path) {
                exports.router.get(routePrefix.concat(path), routeHandler);
            }
        }
    };
}
exports.classDecor = classDecor;
