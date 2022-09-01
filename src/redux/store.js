import { combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counter';
import appReducer from './reducers/app';

export const store = createStore(
  combineReducers({
    counter: counterReducer,
    app: appReducer,
  })
);
