import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import 'jest-enzyme';

import User from '../index';

const themeLight = {
  palette: {
    cardBorderColor: '#ededed',
  },
};

describe('User component renders', () => {
  it('correctly', () => {
    const rendered = renderer.create(
      <ThemeProvider theme={themeLight} >
        <User
          avatar="image.jpg"
          name="Thandolwethu Mpofu"
          username="elandamor"
        />
      </ThemeProvider>
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

