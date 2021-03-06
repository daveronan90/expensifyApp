import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import uuid from "uuid";

test("Should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense with valid id", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[0].id,
  });

  expect(state).toEqual([expenses[1], expenses[2]]);
});

test("Should remove expense without valid id", () => {
  const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: "4" });

  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description: "test",
      note: undefined,
      amount: 0,
      createdAt: 0,
    },
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, action.expense]);
});

test("Should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      description: "updated expense",
    },
  };
  const state = expensesReducer(expenses, action);

  expect(state[0].description).toEqual(action.updates.description);
});

test("Should not edit an expense if none found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      description: "updated expense",
    },
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test("Should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[0]],
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0]]);
});
