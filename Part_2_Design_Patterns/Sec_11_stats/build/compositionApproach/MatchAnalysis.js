"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analysis = void 0;
var WinsAnalysis_1 = require("./analyses/WinsAnalysis");
var HtmlReport_1 = require("./reports/HtmlReport");
;
;
var Analysis = /** @class */ (function () {
    function Analysis(matchInfo, output) {
        this.matchInfo = matchInfo;
        this.output = output;
    }
    // a static method (class method) is called directly on a class itself
    Analysis.analyse = function (team, report) {
        return new Analysis(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport(report));
    };
    // an instance method is called only on a class's instance
    Analysis.prototype.conclude = function (matches) {
        var result = this.matchInfo.run(matches);
        this.output.print(result);
    };
    return Analysis;
}());
exports.Analysis = Analysis;
;
