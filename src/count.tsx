import { MouseEvent, useState } from "react";

export const Count = () => {
  let [a, setA] = useState(1);
  let [b, setB] = useState(true);
  const countHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (!e) {
      setA(++a);
    }
    console.log(a);
    if (e) {
      setA(0);
    }
  };
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={countHandler}>+</button>
      <button id ='1' onClick={countHandler}>0</button>
    </div>
  );
};
