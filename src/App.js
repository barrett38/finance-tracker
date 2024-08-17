import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import Chart from "./components/Chart";

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="container">
      <Header />
      <Summary transactions={transactions} />
      <AddTransaction setTransactions={setTransactions} />
      <TransactionList transactions={transactions} />
      <Chart transactions={transactions} />
    </div>
  );
}

export default App;
