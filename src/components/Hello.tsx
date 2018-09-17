import * as React from "react";


export interface Props {
  name: string;
  enthusiasmLeveL?: number;
}

function getExclamationMarks(numberOfCharacters: number) {
  return Array(numberOfCharacters + 1).join("!");
}

function Hello({name, enthusiasmLeveL = 1}: Props) {

  if (enthusiasmLeveL <= 0 ) {
    throw new Error("The enthusiasm level can't be below zero.");
  }

  return (

    <div className="hello">
      <div className="greeting">
        <p>Hello {name + getExclamationMarks(enthusiasmLeveL)}</p>
      </div>
    </div>

  );

}


export default Hello;
