import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("Should return 0 if for no expenses", () => {
  const result = selectExpensesTotal([]);

  expect(result).toBe(0);
});

test("Should correctly add up a single expense", () => {
  const result = selectExpensesTotal([expenses[0]]);

  expect(result).toBe(195);
});

test("Should correctly add up a multiple expense", () => {
  const result = selectExpensesTotal(expenses);

  expect(result).toBe(22195);
});