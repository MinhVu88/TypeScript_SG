"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("../utils");
var CsvFileReader_1 = require("./CsvFileReader");
;
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    // a static method (class method) is called directly on a class itself
    MatchReader.readFromCsv = function (fileName) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(fileName));
    };
    // an instance method is called only on a class's instance
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (rowOfMatch) {
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
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
