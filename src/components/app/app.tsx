import { DEFAULT_HEADING, HeadingImage, MOCKED_ITEMS } from './consts';
import { Highlight, List, ListProps, Search, SearchProps } from 'components';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { AppProps } from './types';

const renderHighlighted = (query: string) => {
  const highlight: ListProps['render'] = (str) => (
    <Highlight match={query} str={str} />
  );

  return highlight;
};

export const App: FunctionComponent<AppProps> = (props) => {
  const {
    heading = DEFAULT_HEADING,
    searchProps: { buttonProps = {}, inputProps = {} } = {},
  } = props;

  const [value, setValue] = useState<string>('');

  const onChange: SearchProps['inputProps']['onChange'] = useCallback(
    async (event) => {
      const {
        target: { value },
      } = event;

      setValue(value);
    },
    [],
  );

  const onClick: SearchProps['buttonProps']['onClick'] = () => setValue('');

  return (
    <main>
      <h1>
        {heading}
        <span style={{ display: 'block' }}>{HeadingImage}</span>
      </h1>
      <Search
        buttonProps={{ ...buttonProps, onClick }}
        inputProps={{ ...inputProps, onChange, value }}
      />
      <List items={MOCKED_ITEMS} render={renderHighlighted(value)} />
    </main>
  );
};
