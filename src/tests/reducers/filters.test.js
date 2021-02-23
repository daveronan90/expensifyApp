import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup defaut filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("Should set sortby to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });

  expect(state.sortBy).toBe("amount");
});

test("Should set sortby to date", () => {
  const state = filtersReducer({ sortBy: "amount" }, { type: "SORT_BY_DATE" });

  expect(state.sortBy).toBe("date");
});

test("Should set text filter", () => {
  const text = "test";
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text,
  });

  expect(state.text).toBe(text);
});

test("Should set setStartDate filter", () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate,
  });

  expect(state.startDate).toBe(startDate);
});

test("Should set setEndDate filter", () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate,
  });

  expect(state.endDate).toBe(endDate);
});
