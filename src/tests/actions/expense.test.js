import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123",
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense(
    { id: "123" },
    { description: "test", amount: 123 }
  );

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      description: "test",
      amount: 123,
    },
  });
});

test("Should setup add expense action object with provided data", () => {
  const expenseDate = {
    description: "test",
    amount: 123,
    createdAt: 123,
    note: "test note",
  };
  const action = addExpense(expenseDate);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseDate,
      id: expect.any(String),
    },
  });
});

test("Should setup add expense action object with default values", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
