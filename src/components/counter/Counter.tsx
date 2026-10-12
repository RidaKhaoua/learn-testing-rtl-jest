import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Counter
      </button>
      <input
        name="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />

      <button onClick={() => setCounter(amount)}>Set</button>
    </div>
  );
}

export default Counter;
