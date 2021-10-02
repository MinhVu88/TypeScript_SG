import fs from 'fs';
// import {dateStringToDateObject} from './utils';
// import {MatchResultsEnum} from './MatchResults';

// moved to MatchReader.ts
// type MatchData = [Date, string, string, number, number, MatchResultsEnum, string];

// REFACTORING #1: utilizing an abstract class + generic to achieve reusable code
// <T> -> a reference to a generic type
export abstract class CsvFileReader<T> {
  constructor(public fileName: string) {}

  // data: string[][] = [];
  // data: MatchData[] = [];
  data: T[] = [];

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

                //  mapRow isn't invoked here, just a reference to it is passed into map()
                .map(this.mapRow)
  }

  /*
    - Originally the implementation & the returned value's data type (MatchData) of 
      The mapRow method are inextricably linked to processing football.csv

    - Now for the sake of turning CsvFileReader into a completely reusable abstract class,
      it's refactored into an abstract method, which returns a generic type

    - The football.csv-based implementation is moved to MatchReader.ts
  */
  // mapRow(rowOfMatch: string[]): MatchData {
  //   return [
  //     dateStringToDateObject(rowOfMatch[0]),
  //     rowOfMatch[1],
  //     rowOfMatch[2],
  //     parseInt(rowOfMatch[3]),
  //     parseInt(rowOfMatch[4]),
  //     rowOfMatch[5] as MatchResultsEnum,
  //     rowOfMatch[6]
  //   ];
  // }
  // abstract mapRow(rowOfMatch: string[]): MatchData;
  abstract mapRow(rowOfMatch: string[]): T;
};