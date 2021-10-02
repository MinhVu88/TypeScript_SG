"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/RootController");
require("./controllers/AuthControllers");
var app = express_1.default();
var port = process.env.PORT || 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cookie_session_1.default({ keys: ['fsociety'] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(port, function () { return console.log("server's running on port " + port); });
