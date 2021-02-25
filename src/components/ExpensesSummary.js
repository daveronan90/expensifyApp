import numeral from "numeral";
import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format(
    "$0,00.00"
  );

  return (
    <div>
      <h1>
        Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => {
  const visibileExpenses = selectExpenses(expenses, filters);
  return {
    expensesCount: expenses ? 0 : visibileExpenses.length,
    expensesTotal: expensesTotal(visibileExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
