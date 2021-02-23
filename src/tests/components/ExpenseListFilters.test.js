import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("Should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseListFilters with alt data correctly", () => {
  expect(wrapper.setProps({ filters: altFilters })).toMatchSnapshot();
});

test("Should handle text change", () => {
  const value = "some text value";
  wrapper.find("input").simulate("change", { target: { value } });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("Should sort by date", () => {
  const value = "date";
  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByDate).toHaveBeenCalled();
});

test("Should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByAmount).toHaveBeenCalled();
});

test("Should handle date changes", () => {
  const startDate = altFilters.startDate;
  const endDate = altFilters.endDate;
  wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("Should handle date focus change", () => {
  const calendarFocused = "startDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);

  expect(wrapper.state("calendarFocused")).toEqual(calendarFocused);
});
