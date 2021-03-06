import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {composeWithDevTools} from 'redux-devtools-extension';
import user from 'redux/modules/user';
// import Reactotron from 'ReactotronConfig';
import {i18nState} from 'redux-i18n';

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === 'development') {
  const {logger} = require('redux-logger');
  middlewares.push(logger);
}

const reducer = combineReducers({
  user,
  routing: routerReducer,
  i18nState,
});

let store;

if (env === 'development') {
  store = initialState =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares))); //unpack middlewares array -> thun, router, blahblah
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares)); //unpack middlewares array -> thun, router, blahblah
}

export {history};
export default store();
