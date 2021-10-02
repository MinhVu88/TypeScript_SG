"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
function controller(routePrefix) {
    return function (target) {
        for (var method in target.prototype) {
            var metadataKey = 'path';
            var routeHandler = target.prototype[method];
            var path = Reflect.getMetadata(metadataKey, target.prototype, method);
        }
    };
}
exports.controller = controller;
