import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_JSON, SET_NAME } from '../redux/actions/app';
import { DECREMENT, INCREMENT } from '../redux/actions/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const name = useSelector((state) => state.app.name);

  const handleIncrement = () => {
    dispatch({
      type: INCREMENT,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };

  const handleChangeJSON = async () => {
    const json = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    ).then((response) => response.json());
    dispatch({
      type: CHANGE_JSON,
      payload: json,
    });
  };

  return (
    <div>
      <div>
        {counter} {name}
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleChangeJSON}>ChangeJSON</button>
      <div>
        <input
          onChange={(e) => {
            dispatch({
              type: SET_NAME,
              payload: e.target.value,
            });
          }}
        ></input>
      </div>
    </div>
  );
};

export default Counter;
