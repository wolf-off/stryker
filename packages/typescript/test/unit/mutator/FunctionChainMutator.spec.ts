import FunctionChainMutatorSpec from '@stryker-mutator/mutator-specification/src/FunctionChainMutatorSpec';

import FunctionChainMutator from '../../../src/mutator/FunctionChainMutator';

import { verifySpecification } from './mutatorAssertions';

verifySpecification(FunctionChainMutatorSpec, FunctionChainMutator);
