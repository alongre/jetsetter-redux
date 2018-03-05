import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducer';
import initialState from './initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];
const enhancers = [];
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  );
// console.log(initialState);
 console.log(reducers);
const store = createStore(reducers, initialState, enhancer )
// console.log(store.getState());
export default store;

