import { shallow } from "enzyme";
import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("Should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);

  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseList without expenses and message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);

  expect(wrapper).toMatchSnapshot();
});
