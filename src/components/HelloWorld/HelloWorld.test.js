import React from 'react';
import { mount } from 'enzyme';
import HelloWorld from './index';
import TestProvider from "../HelperTest";

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    mount(<TestProvider><HelloWorld /></TestProvider>);
  });
});

describe('Examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
  });
});
