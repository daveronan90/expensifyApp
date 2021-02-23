import { shallow } from "enzyme";
import React from "react";
import NotFoundPage from "../../components/NotFoundPage";

test("Should render NotFoundPage", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
