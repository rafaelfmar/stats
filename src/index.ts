import { MatchReader } from './composition/MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport(
  'Man United',
  'ManUnitedReport'
);

summary.buildAndPrintReport(matchReader.matches);
