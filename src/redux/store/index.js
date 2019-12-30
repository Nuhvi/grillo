import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const middlewares =
  process.env.NODE_ENV === 'development' ? [thunk, logger] : [thunk];

const initialState = {};

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);
