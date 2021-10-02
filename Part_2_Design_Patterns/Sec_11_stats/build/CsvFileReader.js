"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// import {dateStringToDateObject} from './utils';
// import {MatchResultsEnum} from './MatchResults';
// a tuple data structure
// type MatchData = [Date, string, string, number, number, MatchResultsEnum, string];
var CsvFileReader = /** @class */ (function () {
    // data: MatchData[] = [];
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map(function (rowOfMatch) {
            return rowOfMatch.split(',');
        });
        // .map((rowOfMatch: string[]): MatchData => {
        //   return [
        //     dateStringToDateObject(rowOfMatch[0]),
        //     rowOfMatch[1],
        //     rowOfMatch[2],
        //     parseInt(rowOfMatch[3]),
        //     parseInt(rowOfMatch[4]),
        //     // type assertion
        //     rowOfMatch[5] as MatchResultsEnum,
        //     rowOfMatch[6]
        //   ];
        // })
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
;
