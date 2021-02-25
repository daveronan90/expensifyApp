import { shallow } from "enzyme";
import React from "react";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("Should render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary />);

  expect(wrapper).toMatchSnapshot();
});

test("Should render Expenses Summary with 2 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expensesTotal={100} expensesCount={2} />
  );

  expect(wrapper).toMatchSnapshot();
});
