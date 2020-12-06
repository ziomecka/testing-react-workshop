import {
  DEFAULT_BUTTON_LABEL,
  DEFAULT_INPUT_LABEL,
  DEFAULT_PLACEHOLDER,
} from './consts';
import React from 'react';
import { Search } from './search';
import { SearchProps } from './types';

const onClick: jest.Mock<
  ReturnType<SearchProps['buttonProps']['onClick']>,
  Parameters<SearchProps['buttonProps']['onClick']>
> = jest.fn();

const onChange: jest.Mock<
  ReturnType<SearchProps['inputProps']['onChange']>,
  Parameters<SearchProps['inputProps']['onChange']>
> = jest.fn();

const componentProps: SearchProps = {
  buttonProps: {
    onClick,
  },
  inputProps: {
    onChange,
  },
};

describe('Search', () => {
  beforeEach(jest.clearAllMocks);

  it('renders textbox and button', () => {
    const { queryByLabelText, getByRole, getByPlaceholderText } = render(
      <Search {...componentProps} />,
    );

    expect(queryByLabelText(DEFAULT_INPUT_LABEL)).toBeInTheDocument();

    expect(getByRole('textbox')).toHaveValue('');
    expect(getByPlaceholderText(DEFAULT_PLACEHOLDER)).toEqual(
      getByRole('textbox'),
    );

    expect(getByRole('button')).toHaveTextContent(DEFAULT_BUTTON_LABEL);
  });

  it('renders searched value', () => {
    const { queryByRole } = render(<Search {...componentProps} />);

    const input = queryByRole('textbox');

    expect(input).toHaveValue('');

    const value = 'test-search';

    fireEvent.change(input, { target: { value } });

    expect(input).toHaveValue(value);
  });
});
