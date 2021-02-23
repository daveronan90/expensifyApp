import moment from "moment";
import {
  setTextFilter,
  sortByAmount,
  setEndDate,
  setStartDate,
  sortByDate,
} from "../../actions/filters";

test("Should generate start date action oject", () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("Should generate end date action oject", () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("Should generate sort by amount action oject", () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("Should generate sort by date action oject", () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("Should generate set text action object with provide data", () => {
  const text = "some value";
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("Should generate set text action object with default data", () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
