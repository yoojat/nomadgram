import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import users from 'redux/modules/users';

const env = process.env.NODE_ENV;

const middlewares = [thunk];

if (env === 'development') {
  const {logger} = require('redux-logger');
  middlewares.push(logger);
}

const reducer = combineReducers({
  users,
});

let store = initialSCtate =>
  createStore(reducer, applyMiddleware(...middlewares)); //unpack middlewares array -> thun, router, blahblah

export default store();
