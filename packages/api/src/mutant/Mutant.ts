import { Range } from '../../core';
import MutantStatus from '../report/MutantStatus';

interface Mutant {
  mutatorName: string;
  fileName: string;
  range: Range;
  replacement: string;
  status?: MutantStatus;
}

export default Mutant;
