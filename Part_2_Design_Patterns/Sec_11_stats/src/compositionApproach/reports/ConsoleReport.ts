import {OutputTarget} from '../MatchAnalysis';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}