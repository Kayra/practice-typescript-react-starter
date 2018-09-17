import * as React from "react";

import "./Hello.css";


export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function getExclamationMarks(numberOfCharacters: number) {
  return Array(numberOfCharacters + 1).join("!");
}

function Hello({name, enthusiasmLevel = 1}: Props) {

  if (enthusiasmLevel <= 0 ) {
    throw new Error("The enthusiasm level can't be below zero.");
  }

  return (

    <div className="hello">
      <div className="greeting">
        <p>Hello {name + getExclamationMarks(enthusiasmLevel)}</p>
      </div>
    </div>

  );

}


export default Hello;
