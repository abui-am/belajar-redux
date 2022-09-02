import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CHANGE_JSON_PLACEHOLDER_DATA,
  CHANGE_JSON_PLACEHOLDER_DATA_STATUS,
  SET_NAME,
} from '../redux/actions/app';
import { DECREMENT, INCREMENT } from '../redux/actions/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const name = useSelector((state) => state.app.name);
  const jsonPlaceholderData = useSelector(
    (state) => state.app.jsonPlaceholderData
  );

  const jsonPlaceholderDataStatus = useSelector(
    (state) => state.app.jsonPlaceholderDataStatus
  );

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

  const fethJsonPlaceholderData = async () => {
    dispatch({
      type: CHANGE_JSON_PLACEHOLDER_DATA_STATUS,
      payload: 'loading',
    });
    const json = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    ).then((response) => response.json());

    // Dispatch hanya bisa synchronous
    dispatch({
      type: CHANGE_JSON_PLACEHOLDER_DATA,
      payload: json,
    });
    dispatch({
      type: CHANGE_JSON_PLACEHOLDER_DATA_STATUS,
      payload: 'success',
    });
  };

  useEffect(() => {
    fethJsonPlaceholderData();
  }, []);

  if (jsonPlaceholderDataStatus === 'loading') return <div>loading...</div>;

  return (
    <div>
      <div>JSON : </div>
      {jsonPlaceholderData.title}
      <div>
        {counter} {name}
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
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
