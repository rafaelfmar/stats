import { MatchReader } from './composition/MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './composition/CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (const match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
