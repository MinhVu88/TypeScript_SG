import {dateStringToDateObject} from '../utils';
import {MatchResultsEnum} from '../MatchResults';
import {MatchData} from '../MatchData';
import {CsvFileReader} from './CsvFileReader';

// DataSource is the source of info either from CsvFileReader or external API or user input, etc. 
interface DataSource {
  data: string[][];
  read(): void;
};

export class MatchReader {
  // a static method (class method) is called directly on a class itself
  static readFromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  constructor(public reader: DataSource) {}
  
  matches: MatchData[] = [];

  // an instance method is called only on a class's instance
  load(): void {
    this.reader.read();

    this.matches = this.reader.data.map((rowOfMatch: string[]): MatchData => {
      return [
        dateStringToDateObject(rowOfMatch[0]),
        rowOfMatch[1],
        rowOfMatch[2],
        parseInt(rowOfMatch[3]),
        parseInt(rowOfMatch[4]),
        // type assertion
        rowOfMatch[5] as MatchResultsEnum,
        rowOfMatch[6]
      ];
    });
  }
}