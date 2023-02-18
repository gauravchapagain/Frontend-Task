import React, { useContext } from "react";
import { CountContext } from "./index";

function Child2() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <h3>Child 2 Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Child2;
