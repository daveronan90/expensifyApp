import { shallow } from "enzyme";
import React from "react";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

test("Should render ExpenseDashboardPage", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);

  expect(wrapper).toMatchSnapshot();
});
