import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Page from './containers/Page';
import rootReducer from './reducers';
import { createStore } from 'redux'
// import './style/main.css';

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
)