export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

export const increment = () => (dispatch) => {
  dispatch({
    type: INCREMENT,
  });
};

export const decrement = () => (dispatch) => {
  dispatch({
    type: DECREMENT,
  });
};
