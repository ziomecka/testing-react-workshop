import { FetchSearch, fetchSearch } from 'api';
import { App } from './app';
import { HeadingImageAltAttribute } from './consts';
import React from 'react';

jest.mock('api', () => {
  const { MOCKED_ITEMS: mockedItems } = jest.requireActual('./consts');

  const mock: jest.Mock<
    ReturnType<FetchSearch>,
    Parameters<FetchSearch>
  > = jest.fn().mockImplementation(() => Promise.resolve(mockedItems));

  return {
    ...jest.requireActual('api'),
    fetchSearch: mock,
  };
});

describe('App', () => {
  it('updates items on search change', async () => {
    const items = await fetchSearch(null);

    const { queryByRole, getByRole, getByRoleWithTextContent } = customRender(
      <App />,
    );

    expect(queryByRole('term')).not.toBeInTheDocument();
    expect(queryByRole('definition')).not.toBeInTheDocument();

    const searchText = 'test-search';
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: searchText } });

    expect(input).toHaveValue(searchText);

    await waitFor(() =>
      Promise.all(
        items.map(([term, definition]) => {
          expect(getByRoleWithTextContent('term', term)).toBeInTheDocument();

          return expect(
            getByRoleWithTextContent('definition', definition),
          ).toBeInTheDocument();
        }),
      ),
    );
  });

  it('clears items on clear', async () => {
    const items = await fetchSearch(null);

    const { queryByRole, getByRole, getByRoleWithTextContent } = customRender(
      <App />,
    );

    expect(queryByRole('term')).not.toBeInTheDocument();
    expect(queryByRole('definition')).not.toBeInTheDocument();

    const searchText = 'test-search';
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: searchText } });

    expect(input).toHaveValue(searchText);

    await waitFor(() =>
      Promise.all(
        items.map(([term, definition]) => {
          expect(getByRoleWithTextContent('term', term)).toBeInTheDocument();

          return expect(
            getByRoleWithTextContent('definition', definition),
          ).toBeInTheDocument();
        }),
      ),
    );

    fireEvent.click(getByRole('button'));

    await waitFor(() => expect(input).toHaveValue(''));

    expect(queryByRole('term')).not.toBeInTheDocument();
  });

  it('renders heading', () => {
    const heading = 'Heading;';
    const { getByRole } = customRender(<App heading={heading} />);

    expect(getByRole('heading')).toHaveTextContent(heading);
  });

  it('renders image in heading', () => {
    const heading = 'Heading;';
    const { getByRole } = customRender(<App heading={heading} />);

    const { getByRole: getByRoleWithinHeading } = within(getByRole('heading'));

    expect(getByRoleWithinHeading('img')).toHaveAttribute(
      'alt',
      HeadingImageAltAttribute,
    );
  });
});
