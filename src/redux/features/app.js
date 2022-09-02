import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJson = createAsyncThunk('app/fetchJson', async () => {
  const json = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (response) => response.json()
  );
  return json;
});

const appSlice = createSlice({
  name: 'app',
  initialState: {
    json: {},
    jsonStatus: 'idle',
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

  extraReducers: (builder) => {
    builder.addCase(fetchJson.pending, (state, action) => {
      return {
        ...state,
        jsonStatus: 'loading',
      };
    });
    builder.addCase(fetchJson.fulfilled, (state, action) => {
      return {
        ...state,
        json: action.payload,
        jsonStatus: 'success',
      };
    });
    builder.addCase(fetchJson.rejected, (state, action) => {
      return {
        ...state,
        jsonStatus: 'failed',
      };
    });
  },
});

export const selectAppName = (state) => state.app.name;
export const selectAppJson = (state) => state.app.json;
export const selectAppJsonStatus = (state) => state.app.jsonStatus;

export const { setJson, setAppName } = appSlice.actions;
export default appSlice.reducer;
