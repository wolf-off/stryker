import { File, MutatorDescriptor } from '@stryker-mutator/api/core';
import { Logger } from '@stryker-mutator/api/logging';
import { Mutant, Mutator } from '@stryker-mutator/api/mutant';
import { commonTokens, PluginKind, tokens } from '@stryker-mutator/api/plugin';
import { MutantStatus } from '@stryker-mutator/api/report';

import { coreTokens, PluginCreator } from '../di';

export class MutatorFacade implements Mutator {
  public static inject = tokens(commonTokens.mutatorDescriptor, coreTokens.pluginCreatorMutator, commonTokens.logger);
  constructor(
    private readonly mutatorDescriptor: MutatorDescriptor,
    private readonly pluginCreator: PluginCreator<PluginKind.Mutator>,
    private readonly log: Logger
  ) {}

  public mutate(inputFiles: readonly File[]): readonly Mutant[] {
    const mutants = this.pluginCreator.create(this.getMutatorName(this.mutatorDescriptor.name)).mutate(inputFiles);
    this.markExcludedMutants(mutants);
    this.logMutantCount(mutants.filter(mutant => mutant.status !== MutantStatus.Ignored).length, mutants.length);
    return mutants;
  }

  private markExcludedMutants(mutants: readonly Mutant[]) {
    if (this.mutatorDescriptor.excludedMutations.length) {
      mutants.forEach(
        mutant => (mutant.status = this.mutatorDescriptor.excludedMutations.includes(mutant.mutatorName) ? MutantStatus.Ignored : undefined)
      );
    }
  }

  private getMutatorName(mutator: string | MutatorDescriptor) {
    if (typeof mutator === 'string') {
      return mutator;
    } else {
      return mutator.name;
    }
  }

  private logMutantCount(includedMutantCount: number, totalMutantCount: number) {
    let mutantCountMessage;
    if (includedMutantCount) {
      mutantCountMessage = `${includedMutantCount} Mutant(s) generated`;
    } else {
      mutantCountMessage = "It's a mutant-free world, nothing to test.";
    }
    const numberExcluded = totalMutantCount - includedMutantCount;
    if (numberExcluded) {
      mutantCountMessage += ` (${numberExcluded} Mutant(s) ignored)`;
    }
    this.log.info(mutantCountMessage);
  }
}
