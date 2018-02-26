import React from 'react';
import renderer from 'react-test-renderer';

import Like from '../index';

describe('Like component renders', () => {
  it('LIKED', () => {
    const rendered = renderer.create(
      <Like aria-checked data-count={1} data-themed={false} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

describe('Like component renders', () => {
  it('UNLIKED', () => {
    const rendered = renderer.create(
      <Like aria-checked={false} data-count={0} data-themed={false} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

