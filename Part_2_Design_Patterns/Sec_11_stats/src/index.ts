/*
  - Whenever a built-in node standard library module, 
    such as fs, is used in a typescript file.
    
  - Type definition file (@types/node) must be installed 
    for that module to be found & utilized.
*/

const fileName = 'football.csv';

// INHERITANCE-BASED APPROACH
// import {MatchResultsEnum} from './MatchResults';
// import {CsvFileReader} from './inheritanceApproach/CsvFileReader';
// import { MatchReader } from './inheritanceApproach/MatchReader';

// const csvReader = new CsvFileReader(fileName);
// const csvReader = new MatchReader(fileName);
// csvReader.read();

let manUnitedWins = 0;

// Solution #2
const homeWin = 'H';
const awayWin = 'A';

// Solution #3
const matchResults = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D'
};

/* a row of a match:

   ['10/08/2018', 'Man United', 'Leicester', '2', '1' ,'H', 'A Marriner']
         0              1            2        3    4    5         6
*/
// for(let match of /*csvReader.data*/ matchReader.matches) {
  // Solution #1
  // if(match[1] === 'Man United' && match[5] === 'H') {
  //   manUnitedWins++;
  // } else if(match[2] === 'Man United' && match[5] === 'A') {
  //   manUnitedWins++;
  // }

  // Solution #2
  // if(match[1] === 'Man United' && match[5] === homeWin) {
  //   manUnitedWins++;
  // } else if(match[2] === 'Man United' && match[5] === awayWin) {
  //   manUnitedWins++;
  // }

  // Solution #3
  // if(match[1] === 'Man United' && match[5] === matchResults.HomeWin) {
  //   manUnitedWins++;
  // } else if(match[2] === 'Man United' && match[5] === matchResults.AwayWin) {
  //   manUnitedWins++;
  // }

  // Solution #4
  // if(match[1] === 'Man United' && match[5] === MatchResultsEnum.HomeWin) {
  //   manUnitedWins++;
  // } else if(match[2] === 'Man United' && match[5] === MatchResultsEnum.AwayWin) {
  //   manUnitedWins++;
  // }
// };

// console.log(`Man United won ${manUnitedWins} games`);

// COMPOSITION-BASED APPROACH
import {CsvFileReader} from './compositionApproach/CsvFileReader';
import {MatchReader} from './compositionApproach/MatchReader';
import {Analysis} from './compositionApproach/MatchAnalysis';
import {WinsAnalysis} from './compositionApproach/analyses/WinsAnalysis';
import {HtmlReport} from './compositionApproach/reports/HtmlReport';
import {ConsoleReport} from './compositionApproach/reports/ConsoleReport';

const team = 'Man United';
const report = 'src/compositionApproach/reports/report.html';

// 1) create a CsvFileReader instance that satisfies the DataReader interface in MatchReader.ts
// 2) create a MatchReader instance, whose constructor function takes the CsvFileReader object as an arg
const csvFileReader = new CsvFileReader(fileName);
const matchReader_ver1 = new MatchReader(csvFileReader);
// matchReader_ver1.load();

// utilizing the readFromCsv class method
const matchReader_ver2 = MatchReader.readFromCsv(fileName);
matchReader_ver2.load();

const matchAnalysis_ver1 = new Analysis(
  new WinsAnalysis(team),
  new HtmlReport(report)
  // new ConsoleReport()
);

// utilizing the analyse class method (less verbose compared to matchAnalysis_ver1)
const matchAnalysis_ver2 = Analysis.analyse(team, report);

// matchAnalysis_ver1.conclude(matchReader_ver1.matches);
matchAnalysis_ver2.conclude(matchReader_ver2.matches);