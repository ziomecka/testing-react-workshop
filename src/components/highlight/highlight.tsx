import React, { CSSProperties, Fragment, FunctionComponent } from 'react';
import { replaceMatches } from './replace-matches';

export interface HighlightProps {
  str: string;
  match?: string;
  reqexOptions?: Parameters<typeof RegExp>[1];
  highlightStyle?: CSSProperties;
}

export const Highlight: FunctionComponent<HighlightProps> = (props) => {
  const { str, match } = props;

  if (!match || !str) {
    return <Fragment>{str}</Fragment>;
  }

  return (
    <span
      dangerouslySetInnerHTML={{ __html: replaceMatches(str, match) }}
    ></span>
  );
};
