// This is a draft, needs to be refined and tested

import { ILoremIpsumParams, loremIpsum } from 'lorem-ipsum';

import { RandomOptions, random } from './random';

type DefinitionTypeKey = keyof Pick<
  ILoremIpsumParams,
  | 'count'
  | 'paragraphLowerBound'
  | 'sentenceLowerBound'
  | 'paragraphUpperBound'
  | 'sentenceUpperBound'
>;

type DefinitionOptions = Partial<
  {
    [key in DefinitionTypeKey]: RandomOptions;
  }
>;

export const generate = { definition, term };

function term(options?: RandomOptions) {
  const count = random(options);

  return count
    ? loremIpsum({
        count: random(options),
        units: 'words',
        sentenceLowerBound: 1,
        sentenceUpperBound: 1,
        paragraphLowerBound: 1,
        paragraphUpperBound: 1,
      })
    : '';
}

const defaultOptions: DefinitionOptions = {
  count: { min: 1, max: 3 },
  sentenceLowerBound: { min: 1 },
  sentenceUpperBound: { min: 2 },
  paragraphLowerBound: { min: 1 },
  paragraphUpperBound: { min: 2 },
};

function definition(options = defaultOptions) {
  const {
    count = defaultOptions.count,
    sentenceLowerBound = defaultOptions.sentenceLowerBound,
    sentenceUpperBound = defaultOptions.sentenceUpperBound,
    paragraphLowerBound = defaultOptions.paragraphLowerBound,
    paragraphUpperBound = defaultOptions.paragraphUpperBound,
  } = options;

  return loremIpsum({
    count: random(count),
    paragraphLowerBound: random(paragraphLowerBound),
    sentenceLowerBound: random(sentenceLowerBound),
    paragraphUpperBound: random(paragraphUpperBound),
    sentenceUpperBound: random(sentenceUpperBound),
  });
}
