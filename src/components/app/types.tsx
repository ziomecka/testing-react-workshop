import { SearchProps } from 'components';

export interface AppProps {
  heading?: string;
  searchProps?: Partial<{
    inputProps: Pick<SearchProps['inputProps'], 'label'>;
    buttonProps: Pick<SearchProps['buttonProps'], 'label'>;
  }>;
}
