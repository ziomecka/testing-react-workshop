import {
  FormHTMLAttributes,
  InputHTMLAttributes,
  MouseEventHandler,
} from 'react';

export interface SearchProps {
  buttonProps: ButtonProps;
  inputProps: InputProps;
  formProps?: Partial<FormProps>;
}

interface ButtonProps {
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

type SearchHtmlAttributes = Partial<
  Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'id' | 'onChange' | 'placeholder' | 'value'
  >
>;
interface InputProps extends SearchHtmlAttributes {
  label?: string;
}

type FormProps = Pick<
  FormHTMLAttributes<HTMLFormElement>,
  'role' | 'autoComplete'
>;
