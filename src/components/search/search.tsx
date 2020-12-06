import {
  DEFAULT_BUTTON_LABEL,
  DEFAULT_FORM_PROPS,
  DEFAULT_INPUT_ID,
  DEFAULT_INPUT_LABEL,
  DEFAULT_PLACEHOLDER,
} from './consts';

import React, {
  FormEventHandler,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { SearchProps } from './types';

export const Search: FunctionComponent<SearchProps> = (props) => {
  const {
    inputProps,
    inputProps: {
      id = DEFAULT_INPUT_ID,
      placeholder = DEFAULT_PLACEHOLDER,
      value,
      onChange,
    },
    buttonProps: { onClick, label = DEFAULT_BUTTON_LABEL },
    formProps: {
      role = DEFAULT_FORM_PROPS.role,
      autoComplete = DEFAULT_FORM_PROPS.autoComplete,
    } = DEFAULT_FORM_PROPS,
  } = props;

  const [search, setSearch] = useState(value);

  useEffect(() => setSearch(value), [value]);

  const onSubmit: FormEventHandler = useCallback((e) => e.preventDefault(), []);

  return (
    <form role={role} onSubmit={onSubmit} autoComplete={autoComplete}>
      <label htmlFor={id}>
        {`${inputProps.label || DEFAULT_INPUT_LABEL}`}{' '}
      </label>
      <input
        type="text"
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        value={search}
      />
      <button onClick={onClick}>{label}</button>
    </form>
  );
};
