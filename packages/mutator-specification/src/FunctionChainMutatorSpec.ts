import { expect } from 'chai';

import ExpectMutation from './ExpectMutation';

export default function FunctionChainMutatorSpec(name: string, expectMutation: ExpectMutation) {
  describe('FunctionChainMutator', () => {
    it('should have name "FunctionChain"', () => {
      expect(name).eq('FunctionChain');
    });

    it('should not touch single function', () => {
      expectMutation('("test").trim()');
    });

    it('should delete functions separately', () => {
      expectMutation('("test").trim().toUpperCase()',
        '("test").trim()',
        '("test").toUpperCase()');
    });
  });
}
