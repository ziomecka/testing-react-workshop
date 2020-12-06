import React, { Fragment, FunctionComponent, ReactNode } from 'react';

export interface ListProps {
  items: Item[];
  render?(str: string): ReactNode;
}

type Item = [string, string];

const defaultRender: ListProps['render'] = (str) => str;

export const List: FunctionComponent<ListProps> = ({
  items,
  render = defaultRender,
}) => (
  <dl role="list">
    {items &&
      items.map(([term, definition], index) => (
        <Fragment key={index}>
          <dt role="term">{render(term)}</dt>
          <dd>{render(definition)}</dd>
        </Fragment>
      ))}
  </dl>
);
