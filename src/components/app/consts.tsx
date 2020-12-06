import { ListProps } from 'components/list';
import React from 'react';

export const DEFAULT_HEADING = 'Search application';

export const HeadingImageAltAttribute = 'coded with love';

export const HeadingImage = (
  <img
    src="https://img.shields.io/static/v1?label=coded%20with&message=love&color=a53860"
    alt={HeadingImageAltAttribute}
  />
);

export const MOCKED_ITEMS: ListProps['items'] = [
  ['first term', 'first definition'],
  ['second term', 'second definition'],
  ['third term', 'third definition'],
];
