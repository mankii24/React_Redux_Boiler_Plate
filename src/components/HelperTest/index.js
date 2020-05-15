import '@babel/polyfill';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { defaultState } from '../../redux/reducers/reducer';

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares);

const TestProvider = (props) => {
  const children = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, {
      store: mockStore(defaultState)
    });
  });
  return <div>{children}</div>;
};

export default TestProvider;