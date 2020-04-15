import * as ts from 'typescript';

import NodeMutator, {NodeReplacement} from './NodeMutator';

export default class PipeMutator extends NodeMutator<ts.CallExpression> {
  public name = 'Pipe';

  public guard(node: ts.Node): node is ts.CallExpression {
    return node.kind === ts.SyntaxKind.CallExpression;
  }

  protected identifyReplacements(fn: ts.CallExpression, sourceFile: any): NodeReplacement[] {
    console.log('kind: ' + fn.parent.kind);
    console.log('name: ' + sourceFile.text.substring(fn.expression.getEnd() - 5, fn.expression.getEnd()));

    if ((fn.expression.getEnd() - fn.expression.getStart() < 5)
      || sourceFile.text.substring(fn.expression.getEnd() - 5, fn.expression.getEnd()) !== '.pipe')
      return [];

    const mutants: NodeReplacement[] = [];

    console.log('count: ' + fn.arguments.length);

    fn.arguments.forEach((arg, index) => {

      let prev = 0;
      let post = 0;
      if (fn.arguments.length > 1) {
        if (index) {
          prev = 1;
        } else {
          post = 1;
        }
      }

      mutants.push({
        node: fn,
        replacement:
          sourceFile.text.substring(fn.getFullStart(), arg.getFullStart() - prev)
          + sourceFile.text.substring(arg.getEnd() + post, fn.getEnd())
      });
    });

    return mutants;
  }
}
