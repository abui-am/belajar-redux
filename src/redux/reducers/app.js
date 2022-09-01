import { CHANGE_JSON, SET_NAME } from '../actions/app';

const initialState = {
  json: {},
  name: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_JSON:
      return {
        ...state,
        json: action.payload,
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
