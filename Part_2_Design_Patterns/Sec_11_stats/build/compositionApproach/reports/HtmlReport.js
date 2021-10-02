"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(reportName) {
        this.reportName = reportName;
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n      <div style=\"margin-top: 100px; text-align: center;\">\n        <h1>Analytic results for football.csv</h1>\n        <div style=\"color: crimson;\">\n          <h2>" + report + "</h2>\n        </div>\n      </div>\n    ";
        fs_1.default.writeFileSync(this.reportName, html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
