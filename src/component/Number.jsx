import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, numberSelector } from "./../features/numberSlice";

function Number() {
  const [text, setText] = useState(2);
  const number = useSelector(numberSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Number is {number}</h1>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch(increment(+text))}>adddd</button>
    </div>
  );
}

export default Number;
