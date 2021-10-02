"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
/* This class is a Singleton. More about Singleton design pattern:

- https://refactoring.guru/design-patterns/singleton

- https://sourcemaking.com/design_patterns/singleton

- https://wanago.io/2019/11/11/javascript-design-patterns-1-singleton-and-the-module/

- https://www.dofactory.com/javascript/design-patterns/singleton

- https://www.sitepoint.com/javascript-design-patterns-singleton/
*/
var express_1 = __importDefault(require("express"));
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter.getInstance = function () {
        if (!AppRouter.instance) {
            AppRouter.instance = express_1.default.Router();
        }
        return AppRouter.instance;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
