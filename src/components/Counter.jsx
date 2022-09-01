import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getJsonAndDispatchItIntoRedux,
  setAppName,
} from '../redux/actions/app';
import { decrement, increment } from '../redux/actions/counter';
import { selectAppJson, selectAppName } from '../redux/reducers/app';
import { selectCounter } from '../redux/reducers/counter';

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
    dispatch(getJsonAndDispatchItIntoRedux());
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
            dispatch(setAppName(e));
          }}
        ></input>
      </div>
    </div>
  );
};

export default Counter;
