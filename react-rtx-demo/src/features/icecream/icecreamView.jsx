import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, added } from "../icecream/icecreamSlice";
const IcecreamView = () => {
  const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h1>Total number of ice Creams - {noOfIcecreams}</h1>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <input
        type="number"
        name="value"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(added(value))}>Add IceCream</button>
    </div>
  );
};

export default IcecreamView;
