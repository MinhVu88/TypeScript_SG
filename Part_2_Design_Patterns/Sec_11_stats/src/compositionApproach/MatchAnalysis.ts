import {MatchData} from '../MatchData';
import {WinsAnalysis} from './analyses/WinsAnalysis';
import {HtmlReport} from './reports/HtmlReport';

export interface MatchExamination {
  run(matches: MatchData[]): string;
};

export interface OutputTarget {
  print(report: string): void;
};

export class Analysis {
  // a static method (class method) is called directly on a class itself
  static analyse(team: string, report: string): Analysis {
    return new Analysis(
      new WinsAnalysis(team),
      new HtmlReport(report)
    );
  }
  
  constructor(
    public matchInfo: MatchExamination, 
    public output: OutputTarget
  ) {}

  // an instance method is called only on a class's instance
  conclude(matches: MatchData[]): void {
    const result = this.matchInfo.run(matches);

    this.output.print(result);
  }
};