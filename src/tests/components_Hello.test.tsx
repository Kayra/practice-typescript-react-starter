import * as React from "react";
import * as enzyme from "enzyme";

import Hello from "../components/Hello";

it("Renders the correct text when no enthusiasm level is provided", () => {
  const hello = enzyme.shallow(<Hello name="Kayra" />);
  expect(hello.find(".greeting").text()).toEqual("Hello Kayra!");
});

it("Renders the correct text with an explicit enthusiasm of 1", () => {
  const hello = enzyme.shallow(<Hello name="Kayra" enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Kayra!");
});

it("Renders the correct text with an explicit enthusiasm level of more than one (five)", () => {
  const hello = enzyme.shallow(<Hello name="Kayra" enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Kayra!!!!!");
});

it("Throws an error when the enthusiasm level is 0", () => {
  expect(() => {
    enzyme.shallow(<Hello name="Kayra" enthusiasmLevel={0} />);
  }).toThrow();
});

it("Throws an error when the enthusiasm level is negative", () => {
  expect(() => {
    enzyme.shallow(<Hello name="Kayra" enthusiasmLevel={-1} />);
  }).toThrow();
});