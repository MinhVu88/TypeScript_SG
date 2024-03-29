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
;
var requireAuth = function (req, res, next) {
    if (req.session && req.session.isLoggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("\n    <div>\n      <h1>Access Denied</h1>\n      <a href=\"/auth/login\">Login</a>\n    </div>\n  ");
};
var AuthControllers = /** @class */ (function () {
    function AuthControllers() {
    }
    AuthControllers.prototype.getLogin = function (req, res) {
        res.send("\n      <div>\n        <h1>Section 16: Express & TypeScript Integration | Implementation 2</h1>\n        <form method=\"POST\">\n          <div>\n            <label>Email</label>\n            <input name=\"email\"/>\n          </div>\n          <div>\n            <label>Password</label>\n            <input name=\"password\" type=\"password\"/>\n          </div>\n          <button>Submit</button>\n        </form>\n      </div>\n    ");
    };
    AuthControllers.prototype.getProtected = function (req, res) {
        res.send("\n      <div>\n        <h1>Welcome to the protected route, logged-in user</h1>\n        <a href=\"/\">Back Home</a>\n      </div>\n    ");
    };
    AuthControllers.prototype.postLogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email === 'method2@sec16.server' && password === '1234') {
            // mark user as logged-in using the cookie-session middleware
            req.session = { isLoggedIn: true };
            // redirect user back to the root route
            res.redirect('/');
        }
        else {
            res.send("\n        <div>\n          <h1>Invalid Credentials</h1>\n          <a href=\"/auth/login\">Login</a>\n        </div>\n      ");
        }
    };
    AuthControllers.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    __decorate([
        decorators_1.get('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthControllers.prototype, "getLogin", null);
    __decorate([
        decorators_1.get('/protected'),
        decorators_1.use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthControllers.prototype, "getProtected", null);
    __decorate([
        decorators_1.post('/login'),
        decorators_1.reqBodyValidation('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthControllers.prototype, "postLogin", null);
    __decorate([
        decorators_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AuthControllers.prototype, "getLogout", null);
    AuthControllers = __decorate([
        decorators_1.classDecor('/auth')
    ], AuthControllers);
    return AuthControllers;
}());
