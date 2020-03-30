import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './reducers/rootReducer.js';

const middleware = [thunk];

const preloadedState = {}; // main state for application

//feature for browser
const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

//logger for async requests
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger); // Должен быть в конце
}

const store =
  process.env.NODE_ENV !== 'production'
    ? createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(...middleware)))
    : createStore(reducers, applyMiddleware(...middleware));

export default store;
