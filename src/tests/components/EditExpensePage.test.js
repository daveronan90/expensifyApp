import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let wrapper, startEditExpense, startRemoveExpense, history;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
    />
  );
});

test("Should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);

  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test("Should handle startRemoveExpense", () => {
  wrapper.find("button").simulate("click");

  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
