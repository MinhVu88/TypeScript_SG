import fs from 'fs';
// import {dateStringToDateObject} from './utils';
// import {MatchResultsEnum} from './MatchResults';

// a tuple data structure
// type MatchData = [Date, string, string, number, number, MatchResultsEnum, string];

export class CsvFileReader {
  constructor(public fileName: string) {}
  
  data: string[][] = [];
  // data: MatchData[] = [];

  read(): void {
    this.data = fs
                .readFileSync(
                  this.fileName,
                  {encoding: 'utf-8'}
                )
                .split('\n')
                .map((rowOfMatch: string): string[] => {
                  return rowOfMatch.split(',');
                })
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
  }
};