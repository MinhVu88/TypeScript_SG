"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
;
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n    <div>\n      <h1>Section 14: Express & TypeScript Integration | Implementation 1</h1>\n      <form method=\"POST\">\n        <div>\n          <label>Email</label>\n          <input name=\"email\"/>\n        </div>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" type=\"password\"/>\n        </div>\n        <button>Submit</button>\n      </form>\n    </div>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'method1@sec14.server' && password === '1234') {
        // mark user as logged-in using the cookie-session middleware
        req.session = { isLoggedIn: true };
        // redirect user back to the root route
        res.redirect('/');
    }
    else {
        res.send('Invalid credentials');
    }
});
router.get('/', function (req, res) {
    // use cookie-session to determine whether user is logged in
    if (req.session && req.session.isLoggedIn) {
        res.send("\n      <div>\n        <div>You're logged in</div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>You're not logged in</div>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
