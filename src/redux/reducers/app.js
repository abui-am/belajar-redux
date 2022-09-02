import { CHANGE_JSON, CHANGE_JSON_STATUS, SET_NAME } from '../actions/app';

const initialState = {
  json: {},
  jsonStatus: 'idle',
  name: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_JSON:
      return {
        ...state,
        json: action.payload,
        jsonStatus: 'success',
      };

    case CHANGE_JSON_STATUS:
      return {
        ...state,
        jsonStatus: action.payload,
      };

    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export const selectAppName = (state) => state.app.name;
export const selectAppJson = (state) => state.app.json;

export default appReducer;
