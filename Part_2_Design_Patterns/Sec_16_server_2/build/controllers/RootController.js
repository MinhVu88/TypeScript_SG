"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        // use cookie-session to determine whether user is logged in
        if (req.session && req.session.isLoggedIn) {
            res.send("\n        <div>\n          <h1>You're logged in</h1>\n          <a href=\"/auth/logout\">Logout</a> |\n          <a href=\"/auth/protected\">Protected</a>\n        </div>\n      ");
        }
        else {
            res.send("\n        <div>\n          <h1>You're logged out</h1>\n          <a href=\"/auth/login\">Login</a>\n        </div>\n      ");
        }
    };
    __decorate([
        decorators_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    RootController = __decorate([
        decorators_1.classDecor('')
    ], RootController);
    return RootController;
}());
