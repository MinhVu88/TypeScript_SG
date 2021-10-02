"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDateObject = void 0;
var dateStringToDateObject = function (dateString) {
    // "10/08/2018" => [10, 8, 2018]
    var dateArray = dateString
        .split('/')
        .map(function (datePart) {
        return parseInt(datePart);
    });
    // month is zero-indexed in the Date constructor, 
    // so 1 must be subtracted from yearMonthDateArray[1]
    // Ex: month = 1 | 1 - 1 = 0 | 0 => January
    var year = dateArray[2];
    var month = dateArray[1] - 1;
    var day = dateArray[0];
    return new Date(year, month, day);
};
exports.dateStringToDateObject = dateStringToDateObject;
