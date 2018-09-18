import * as React from "react";
import * as enzyme from "enzyme";
import * as sinon from "sinon";

import Hello from "../components/ReduxHello";


const spy = sinon.spy();

it("Triggers onIncrement when the + button is clicked", () => {
  const helloComponent = enzyme.shallow(<Hello name="Kayra" onIncrement={spy}/>);

  helloComponent.find('.increment').simulate('click');
  expect(spy.called).toBeTruthy();
});

it("Triggers onDecrement when the - button is clicked", () => {

});
