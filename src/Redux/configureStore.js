import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import covidDataReducer from './countries/covidData';

const store = createStore(
  covidDataReducer,
  applyMiddleware(thunkMiddleware, logger),
);

export default store;
