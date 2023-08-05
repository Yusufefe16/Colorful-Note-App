import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [amount, setAmount] = useState(0);
  const addValue = Number(amount) || 0;
  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  const dispatch = useDispatch();

  return (
    <section>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br/>
      <label>increment amount: </label>
      <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>

      <div>
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
