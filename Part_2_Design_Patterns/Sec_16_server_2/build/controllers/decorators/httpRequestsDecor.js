"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var HttpRequestsEnum_1 = require("../../HttpRequestsEnum");
var MetadataKeysEnum_1 = require("../../MetadataKeysEnum");
;
// the bindRoute function returns a decorator factory
function bindRoute(httpRequest) {
    return function (path) {
        return function (target, propertyKey, properyDescriptor) {
            var metadataValue1 = path;
            var metadataValue2 = httpRequest;
            Reflect.defineMetadata(MetadataKeysEnum_1.MetadataKeys.path, metadataValue1, target, propertyKey);
            Reflect.defineMetadata(MetadataKeysEnum_1.MetadataKeys.method, metadataValue2, target, propertyKey);
        };
    };
}
exports.get = bindRoute(HttpRequestsEnum_1.HttpRequests.get);
exports.post = bindRoute(HttpRequestsEnum_1.HttpRequests.post);
exports.put = bindRoute(HttpRequestsEnum_1.HttpRequests.put);
exports.del = bindRoute(HttpRequestsEnum_1.HttpRequests.del);
exports.patch = bindRoute(HttpRequestsEnum_1.HttpRequests.patch);
