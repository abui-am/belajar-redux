import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchJson,
  selectAppJsonStatus,
  setAppName,
} from '../redux/features/app';
import { decrement, increment, selectCounter } from '../redux/features/counter';
import { selectAppJson, selectAppName } from '../redux/features/app';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);
  const name = useSelector(selectAppName);
  const json = useSelector(selectAppJson);
  const jsonStatus = useSelector(selectAppJsonStatus);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeJSON = async () => {
    dispatch(fetchJson());
  };

  if (jsonStatus === 'loading') return <div>Loading...</div>;
  if (jsonStatus === 'failed') return <div>Error...</div>;

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
