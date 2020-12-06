import { DEFAULT_HEADING, HeadingImage } from './consts';
import { Highlight, List, ListProps, Search, SearchProps } from 'components';
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { AppProps } from './types';
import { fetchSearch } from 'api';

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

  const [items, setItems] = useState<ListProps['items']>(null);
  const [value, setValue] = useState<string>('');

  const onChange: SearchProps['inputProps']['onChange'] = useCallback(
    async (event) => {
      const {
        target: { value },
      } = event;

      setValue(value);

      const items = value
        ? ((await fetchSearch(value)) as ListProps['items'])
        : null;

      setItems(items);
    },
    [],
  );

  useEffect(() => !value && setItems(null), [value]);

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
      <List items={items} render={renderHighlighted(value)} />
    </main>
  );
};
