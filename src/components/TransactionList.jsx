import React from "react";

function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount} (
            {transaction.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
