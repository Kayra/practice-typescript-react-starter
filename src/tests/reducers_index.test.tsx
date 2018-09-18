import { enthusiasm } from "../reducers/index";
import { StoreState } from "../types/index";

import { incrementEnthusiasm, decrementEnthusiasm } from "../actions/index";


let initialTestState: StoreState;
beforeEach(() => {
  initialTestState = {
    languageName: "",
    enthusiasmLevel: 2
  }
})


it("Increases the enthusiasm level in the state by one when passed the INCREMENT_ENTHUSIASM type", () => {

  const expectedResultState = {
    languageName: "",
    enthusiasmLevel: 3
  }
  const actualResultState = enthusiasm(initialTestState, incrementEnthusiasm());
  expect(actualResultState).toEqual(expectedResultState);

});


it("Decreases the enthusiasm level in the state by one when passed the DECREMENT_ENTHUSIASM type", () => {
  
  const expectedResultState = {
    languageName: "",
    enthusiasmLevel: 1
  }
  const actualResultState = enthusiasm(initialTestState, decrementEnthusiasm());
  expect(actualResultState).toEqual(expectedResultState);

});


it("Does not allow the enthusiasm level in the state to fall below 1", () => {
  
  initialTestState.enthusiasmLevel = 1
  
  const expectedResultState = {
    languageName: "",
    enthusiasmLevel: 1
  }

  const actualResultState = enthusiasm(initialTestState, decrementEnthusiasm());

  expect(actualResultState).toEqual(expectedResultState);

});