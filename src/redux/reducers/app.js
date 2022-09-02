import {
  CHANGE_JSON_PLACEHOLDER_DATA,
  CHANGE_JSON_PLACEHOLDER_DATA_STATUS,
  SET_NAME,
} from '../actions/app';

const initialState = {
  jsonPlaceholderData: {},
  jsonPlaceholderDataStatus: 'idle',
  name: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_JSON_PLACEHOLDER_DATA:
      return {
        ...state,
        jsonPlaceholderData: action.payload,
        jsonPlaceholderDataStatus: 'success',
      };

    case CHANGE_JSON_PLACEHOLDER_DATA_STATUS:
      return {
        ...state,
        jsonPlaceholderDataStatus: action.payload,
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

export default appReducer;
