import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCounter,
} from "./../features/counterSlice";

function Counter() {
  const counter = useSelector(selectCounter);
  console.log(counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter is {counter}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>ddd</button>
    </div>
  );
}

export default Counter;
