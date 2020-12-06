import { SearchProps } from './types';

export const DEFAULT_BUTTON_LABEL = 'x';
export const DEFAULT_INPUT_LABEL = 'Search:';
export const DEFAULT_PLACEHOLDER = '...';

export const DEFAULT_INPUT_ID = 'search-input';

export const DEFAULT_FORM_PROPS: SearchProps['formProps'] = {
  role: 'search',
  autoComplete: 'off',
};
