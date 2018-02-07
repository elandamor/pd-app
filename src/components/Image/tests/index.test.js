import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import 'jest-enzyme';

import Image from '../index';

const themeLight = {
  palette: {
    cardBorderColor: '#ededed',
  },
};

describe('Image component renders', () => {
  it('correctly', () => {
    const rendered = renderer.create(
      <ThemeProvider theme={themeLight} >
        <Image src="image.png" />
      </ThemeProvider>
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

