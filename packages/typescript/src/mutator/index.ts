// import ArithmeticOperatorMutator from './ArithmeticOperatorMutator';
// import ArrayDeclarationMutator from './ArrayDeclarationMutator';
// import ArrowFunctionMutator from './ArrowFunctionMutator';
// import BlockStatementMutator from './BlockStatementMutator';
// import BooleanLiteralMutator from './BooleanLiteralMutator';
// import ConditionalExpressionMutator from './ConditionalExpressionMutator';
// import EqualityOperatorMutator from './EqualityOperatorMutator';
import FunctionChainMutator from './FunctionChainMutator';
// import ObjectLiteralMutator from './ObjectLiteralMutator';
import PipeMutator from './PipeMutator';
// import StringLiteralMutator from './StringLiteralMutator';
// import LogicalOperatorMutator from './LogicalOperatorMutator';
// import UnaryOperatorMutator from './UnaryOperatorMutator';
// import UpdateOperatorMutator from './UpdateOperatorMutator';
import NodeMutator from './NodeMutator';

export const nodeMutators: readonly NodeMutator[] = [
  // new ArithmeticOperatorMutator(),
  // new ArrayDeclarationMutator(),
  // new BlockStatementMutator(),
  // new BooleanLiteralMutator(),
  // new ConditionalExpressionMutator(),
  // new EqualityOperatorMutator(),
  // new LogicalOperatorMutator(),
  // new ObjectLiteralMutator(),
  // new StringLiteralMutator(),
  // new UnaryOperatorMutator(),
  // new UpdateOperatorMutator(),
  // new ArrowFunctionMutator(),
  new FunctionChainMutator(),
  new PipeMutator()
];
