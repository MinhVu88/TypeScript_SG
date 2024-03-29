"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResults_1 = require("../../MatchResults");
// this class's instance takes in a team's name & 
// find the number of times that team won a match
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var winsCount = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResultsEnum.HomeWin) {
                winsCount++;
            }
            else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResultsEnum.AwayWin) {
                winsCount++;
            }
        }
        return "Team [ " + this.team + " ] won " + winsCount + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
