export const CHANGE_JSON = 'app/CHANGE_JSON';
export const CHANGE_JSON_STATUS = 'app/CHANGE_JSON_STATUS';

export const SET_NAME = 'app/SET_NAME';

export const getJsonAndDispatchItIntoRedux = () => async (dispatch) => {
  dispatch({
    type: CHANGE_JSON_STATUS,
    payload: 'loading',
  });
  const json = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (response) => response.json()
  );
  dispatch({
    type: CHANGE_JSON,
    payload: json,
  });
  dispatch({
    type: CHANGE_JSON_STATUS,
    payload: 'success',
  });
};

export const setAppName = (e) => (dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: e.target.value,
  });
};
