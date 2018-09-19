import * as React from "react";

import "./Hello.css";


export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function getExclamationMarks(numberOfCharacters: number) {
  return Array(numberOfCharacters + 1).join("!");
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {

  return (

    <div className="hello">

      <div className="greeting">
        <p>Hello {name + getExclamationMarks(enthusiasmLevel)}</p>
      </div>

      <div>
        <button className="increment" onClick={onIncrement}>+</button>
        <button className="decrement" onClick={onDecrement}>-</button>
      </div>


    </div>

  );

}


export default Hello;
