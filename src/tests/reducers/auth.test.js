import authReducer from "../../reducers/auth";

test("Should set default state", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("Should set uid on state", () => {
  const uid = "hfnsdkbjd43465sdjvba";

  const state = authReducer(
    {},
    {
      type: "LOGIN",
      uid,
    }
  );

  expect(state).toEqual({ uid });
});

test("Should remove uid from state", () => {
  const uid = "hfnsdkbjd43465sdjvba";

  const state = authReducer(
    { uid },
    {
      type: "LOGOUT",
    }
  );

  expect(state).toEqual({});
});
