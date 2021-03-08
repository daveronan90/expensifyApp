import { login, logout, startLogin, startLogout } from "../../actions/auth";

test("Should setup login action object", () => {
  const uid = "bjkvfjbdiubdfbvabbbva";
  const action = login(uid);

  expect(action).toEqual({
    type: "LOGIN",
    uid,
  });
});

test("Should setup logout action object", () => {
  const action = logout();

  expect(action).toEqual({
    type: "LOGOUT",
  });
});
