import { MatchData } from '../../MatchData';
import {MatchExamination} from '../MatchAnalysis';
import {MatchResultsEnum} from '../../MatchResults';

// this class's instance takes in a team's name & 
// find the number of times that team won a match
export class WinsAnalysis implements MatchExamination {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let winsCount = 0;

    for(let match of matches) {
      if(match[1] === 'Man United' && match[5] === MatchResultsEnum.HomeWin) {
        winsCount++;
      } else if(match[2] === 'Man United' && match[5] === MatchResultsEnum.AwayWin) {
        winsCount++;
      }
    }

    return `Team [ ${this.team} ] won ${winsCount} games`;
  }
}