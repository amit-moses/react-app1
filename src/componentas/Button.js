import { useState } from "react";

const Button = () => {
  // function inc() {setCounter(counter + 1);}
  // function des() {setCounter(counter - 1);}
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
    </div>
  );
};

export default Button;
