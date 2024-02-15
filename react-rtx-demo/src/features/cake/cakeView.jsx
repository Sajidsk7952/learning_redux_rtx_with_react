import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {ordered,added} from '../cake/cakeSlice'
const CakeView = () => {
    const noOfCakes = useSelector((state)=> state.cake.noOfCakes)
    const dispatch = useDispatch();
  return (
    <div>
      <h1>total number of cakes - {noOfCakes}</h1>
      <button onClick={()=>(dispatch(ordered()))}>order cake</button>
      <button onClick={()=>(dispatch(added(1)))}>add a cake</button>
    </div>
  );
};

export default CakeView;
