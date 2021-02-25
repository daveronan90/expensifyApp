import numeral from "numeral";
import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
  <div>
    <p>
      {`Viewing ${expensesCount ? expensesCount : "0"} ${
        expensesCount === 1 ? "expense" : "expenses"
      } totalling ${numeral(expensesTotal / 100).format("$0,00.00")}`}
    </p>
  </div>
);

const mapStateToProps = ({ expenses, filters }) => ({
  expensesCount: selectExpenses(expenses, filters).length,
  expensesTotal: expensesTotal(selectExpenses(expenses, filters)),
});

export default connect(mapStateToProps)(ExpensesSummary);
