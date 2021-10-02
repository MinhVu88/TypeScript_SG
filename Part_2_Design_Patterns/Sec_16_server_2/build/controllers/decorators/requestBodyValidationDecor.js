"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqBodyValidation = void 0;
require("reflect-metadata");
var MetadataKeysEnum_1 = require("../../MetadataKeysEnum");
function reqBodyValidation() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    return function (target, propertyKey, properyDescriptor) {
        Reflect.defineMetadata(MetadataKeysEnum_1.MetadataKeys.reqBodyValidation, data, target, propertyKey);
    };
}
exports.reqBodyValidation = reqBodyValidation;
