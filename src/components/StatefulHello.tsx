import * as React from "react";

import "./Hello.css";


export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

function getExlamationMarks(numberOfCharacters: number) {
  return Array(numberOfCharacters + 1).join("!");
}

class StatefulHello extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { 
      currentEnthusiasm: props.enthusiasmLevel || 1
    };
  }

  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  render() {

    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error("The enthusiasm level can't be below zero.");
    }

    return (

      <div className="hello">

        <div className="greeting">
          <p>Hello {name + getExlamationMarks(this.state.currentEnthusiasm)}</p>
        </div>

        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>

      </div>

    );

  }

}

export default StatefulHello;
