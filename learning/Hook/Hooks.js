import { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    return setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    return setCount((prevCount) => prevCount - 1);
  };

  return (
    <main className="bg-light">
      <br />
      <span>{count}</span>
      <button className="btn btn-outline-success" onClick={increment}>
        Subscribe
      </button>
      <button className="btn btn-outline-danger" onClick={decrement}>
        UnSubscribe
      </button>
    </main>
  );
};

export default Hooks;
