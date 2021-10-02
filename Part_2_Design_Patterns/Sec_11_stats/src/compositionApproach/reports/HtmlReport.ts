import fs from 'fs';
import {OutputTarget} from '../MatchAnalysis';

export class HtmlReport implements OutputTarget {
  constructor(public reportName: string) {}

  print(report: string): void {
    const html = `
      <div style="margin-top: 100px; text-align: center;">
        <h1>Analytic results for football.csv</h1>
        <div style="color: crimson;">
          <h2>${report}</h2>
        </div>
      </div>
    `;

    fs.writeFileSync(this.reportName, html);
  }
}