import { List, ListProps } from './list';
import React from 'react';

type Item = ListProps['items'][0];

// TODO calls render
describe('List', () => {
  it('renders items', () => {
    const firstItem: Item = ['first-term', 'first-description'];
    const secondItem: Item = ['second-term', 'second-description'];

    const items: ListProps['items'] = [firstItem, secondItem];

    const { getByRoleWithTextContent, getByRole } = customRender(
      <List items={items} />,
    );

    expect(getByRole('list')).toBeInTheDocument();

    items.forEach(([term, definition]) => {
      expect(getByRoleWithTextContent('term', term)).toBeInTheDocument();

      expect(
        getByRoleWithTextContent('definition', definition),
      ).toBeInTheDocument();
    });
  });
});
