import PipeMutatorSpec from '@stryker-mutator/mutator-specification/src/PipeMutatorSpec';

import PipeMutator from '../../../src/mutator/PipeMutator';

import { verifySpecification } from './mutatorAssertions';

verifySpecification(PipeMutatorSpec, PipeMutator);
