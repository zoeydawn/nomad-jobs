import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = [
  thunkMiddleware,
  promiseMiddleware(),
  // ...
];

const store = createStore(reducer, compose(applyMiddleware(...middleware)));

export default store;
