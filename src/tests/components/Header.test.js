import { shallow } from "enzyme";
import React from "react";
import { Header } from "../../components/Header";

let wrapper, startLogout;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test("Should render header correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should call startLogout on button click", () => {
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});
