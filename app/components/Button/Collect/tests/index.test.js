import React from 'react';
import renderer from 'react-test-renderer';

import Collect from '../index';

describe('Collect component renders', () => {
  it('COLLECTED and THEMED', () => {
    const rendered = renderer.create(
      <Collect aria-checked data-themed />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

describe('Collect component renders', () => {
  it('NOT COLLECTED and NOT THEMED', () => {
    const rendered = renderer.create(
      <Collect aria-checked={false} data-themed={false} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
