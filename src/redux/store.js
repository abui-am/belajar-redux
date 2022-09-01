import { applyMiddleware, combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counter';
import appReducer from './reducers/app';
import reduxThunk from 'redux-thunk';

export const store = createStore(
  combineReducers({
    counter: counterReducer,
    app: appReducer,
  }),
  applyMiddleware(reduxThunk)
);
