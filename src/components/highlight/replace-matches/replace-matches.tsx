// This is a draft, needs to be refined and tested

import { defaultHighlightAttributes } from './consts';
import { getRegexp } from './get-regexp';

type Render = (str: string) => string;

type ReplaceMatchesArgs = [string, RegExp | string, Render?];

const defaultRender: Render = (s) =>
  `<span ${defaultHighlightAttributes}>${s}</span>`;

export const replaceMatches = (...args: ReplaceMatchesArgs) => {
  const [str, toBeReplaced, render = defaultRender] = args;

  const regexp =
    typeof toBeReplaced === 'string' ? getRegexp(toBeReplaced) : toBeReplaced;

  return str.replace(regexp, (...args) => {
    const [, before, match, after] = args;

    return `${before}${render(match).toString()}${after}`;
  });
};
