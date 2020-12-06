import { RandomOptions, generate, random } from './mock-search';

const defaultResultsCount: RandomOptions = { min: 0, max: 10 };

export type FetchSearch = (
  query: string,
  resultsCount?: RandomOptions,
) => Promise<[string, string][]>;

export const fetchSearch: FetchSearch = (
  query,
  resultsCount = defaultResultsCount,
) =>
  Promise.resolve(
    new Array(random(resultsCount))
      .fill(null)
      .map(() => [
        `${generate.term()} ${query} ${generate.term()}`,
        generate.definition(),
      ]),
  );
