import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAppName, setJson } from '../redux/features/app';
import { decrement, increment, selectCounter } from '../redux/features/counter';
import { selectAppJson, selectAppName } from '../redux/features/app';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);
  const name = useSelector(selectAppName);
  const json = useSelector(selectAppJson);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeJSON = async () => {
    const json = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    ).then((response) => response.json());
    dispatch(setJson(json));
  };

  return (
    <div>
      <div>
        {counter} {name}
      </div>
      <div>{JSON.stringify(json)}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleChangeJSON}>ChangeJSON</button>
      <div>
        <input
          onChange={(e) => {
            dispatch(setAppName(e.target.value));
          }}
        ></input>
      </div>
    </div>
  );
};

export default Counter;
