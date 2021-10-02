"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
function get(path) {
    return function (target, propertyKey, properyDescriptor) {
        var metadataKey = 'path';
        var metadataValue = path;
        Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);
    };
}
exports.get = get;
