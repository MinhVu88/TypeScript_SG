"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var CsvFileReader_1 = require("../CsvFileReader");
var utils_1 = require("../utils");
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchReader.prototype.mapRow = function (rowOfMatch) {
        return [
            utils_1.dateStringToDateObject(rowOfMatch[0]),
            rowOfMatch[1],
            rowOfMatch[2],
            parseInt(rowOfMatch[3]),
            parseInt(rowOfMatch[4]),
            // type assertion
            rowOfMatch[5],
            rowOfMatch[6]
        ];
    };
    return MatchReader;
}(CsvFileReader_1.CsvFileReader));
exports.MatchReader = MatchReader;
;
