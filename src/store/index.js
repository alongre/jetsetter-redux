import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import initialState from './initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];
const enhancers = [];
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  );

const store = createStore(rootReducer, initialState, enhancer )

export default store;

