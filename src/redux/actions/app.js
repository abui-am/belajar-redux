export const CHANGE_JSON = 'app/CHANGE_JSON';
export const SET_NAME = 'app/SET_NAME';

export const getJsonAndDispatchItIntoRedux = () => async (dispatch) => {
  const json = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (response) => response.json()
  );
  dispatch({
    type: CHANGE_JSON,
    payload: json,
  });
};

export const setAppName = (e) => (dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: e.target.value,
  });
};
