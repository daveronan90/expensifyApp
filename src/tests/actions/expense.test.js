import {
  addExpense,
  removeExpense,
  editExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
} from "../../actions/expenses";
import database from "../../firebase/firebase";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(
    ({ id, description, note, amount, createdAt }) =>
      (expenseData[id] = { description, note, amount, createdAt })
  );
  database
    .ref("expenses")
    .set(expenseData)
    .then(() => done());
});

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
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("Should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "mouse",
    note: "this is great",
    amount: 50900,
    createdAt: 561365764,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("Should add expense with default data to database and store", (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };
  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseDefaults,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

test("Should setup setExpense action object with expenses data", () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("Should fetch the expenses from firebase", (done) => {
  const store = createMockStore({});

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });

    done();
  });
});

test("Should remove expense from firebase", (done) => {
  const store = createMockStore({});
  const expensesDefault = expenses.map(
    ({ description, note, amount, createdAt }) => ({
      description,
      note,
      amount,
      createdAt,
    })
  );

  store.dispatch(startRemoveExpense({ id: expenses[0].id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id: expenses[0].id,
    });

    return database
      .ref(`expenses`)
      .once("value")
      .then((snapshot) => {
        const fetchedExpenses = [];

        snapshot.forEach((childSnapshot) => {
          fetchedExpenses.push({ ...childSnapshot.val() });
        });

        expect(fetchedExpenses).toEqual([
          expensesDefault[1],
          expensesDefault[2],
        ]);
        done();
      });
  });
});
