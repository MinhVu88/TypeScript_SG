import {MatchResultsEnum} from './MatchResults';

/* A tuple data structure representing a single row of football.csv. For example:

   [
    '10/08/2018' (string -> Date, using dateStringToDateObject() in utils.ts), 
    'Man United' (string), 
    'Leicester' (string), 
    '2' (string -> number, using parseInt()), 
    '1' (string -> number, using parseInt()),
    'H' (string -> MatchResultsEnum, using type assertion in MatchReader.ts), 
    'A Marriner' (string)
   ]
*/
export type MatchData = [Date, string, string, number, number, MatchResultsEnum, string];