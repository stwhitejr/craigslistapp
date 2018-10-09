import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Page from './containers/Page';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft);
library.add(faArrowRight);

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
);
