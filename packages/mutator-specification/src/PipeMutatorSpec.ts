import {expect} from 'chai';

import ExpectMutation from './ExpectMutation';

export default function PipeMutatorSpec(name: string, expectMutation: ExpectMutation) {
  describe('PipeMutator', () => {
    it('should have name "Pipe"', () => {
      expect(name).eq('Pipe');
    });

    it('should delete single arg', () => {
      expectMutation('Vari.pipe(x1)',
        'Vari.pipe()'
      );
    });

    it('should delete several args', () => {
      expectMutation('("test").pipe(x1,x2,x3)',
        '("test").pipe(x2,x3)',
        '("test").pipe(x1,x3)',
        '("test").pipe(x1,x2)'
      );
    });

    it('should work with several pipes', () => {
      expectMutation('this.vari.pipe(x1,x2).pipe(x3,x4).subscribe()',
        'this.vari.pipe(x2).pipe(x3,x4).subscribe()',
        'this.vari.pipe(x1).pipe(x3,x4).subscribe()',
        'this.vari.pipe(x1,x2).pipe(x4).subscribe()',
        'this.vari.pipe(x1,x2).pipe(x3).subscribe()'
      );
    });

    it('should work with real example', () => {
      expectMutation('this.value$.pipe(filter(e => e % 2 === 0),map(e => e / 2 * 3));',
        'this.value$.pipe(map(e => e / 2 * 3));',
        'this.value$.pipe(filter(e => e % 2 === 0));'
      );
    });


  });
}
