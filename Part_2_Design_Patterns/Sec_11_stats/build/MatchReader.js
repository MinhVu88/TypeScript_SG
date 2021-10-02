"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
;
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
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
