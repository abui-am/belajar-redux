import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    json: {},
    name: '',
  },
  reducers: {
    setJson: (state, action) => {
      return {
        ...state,
        json: action.payload,
      };
    },
    setAppName: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export const selectAppName = (state) => state.app.name;
export const selectAppJson = (state) => state.app.json;

export const { setJson, setAppName } = appSlice.actions;
export default appSlice.reducer;
