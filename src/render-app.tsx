import { App } from 'components';
import React from 'react';
import { appProps } from './consts';
import { render } from 'react-dom';

export const renderApp = () =>
  render(<App {...appProps} />, document.getElementById(process.env.APP_ID));
