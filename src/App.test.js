import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders Header component", () => {
  render(<App />);
  const headerElement = screen.getByText(/Transaction List/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders Summary component", () => {
  render(<App />);
  const summaryElement = screen.getByText(/Summary/i);
  expect(summaryElement).toBeInTheDocument();
});

test("renders AddTransaction component", () => {
  render(<App />);
  const addTransactionElement = screen.getByText(/Add Transaction/i);
  expect(addTransactionElement).toBeInTheDocument();
});

test("renders TransactionList component", () => {
  render(<App />);
  const transactionListElement = screen.getByText(/Transaction List/i);
  expect(transactionListElement).toBeInTheDocument();
});

test("renders Chart component", () => {
  render(<App />);
  const chartElement = screen.getByText(/Chart/i);
  expect(chartElement).toBeInTheDocument();
});

test("adds a new transaction", () => {
  render(<App />);

  const descriptionInput = screen.getByLabelText(/Description/i);
  const amountInput = screen.getByLabelText(/Amount/i);
  const categoryInput = screen.getByLabelText(/Category/i);
  const addButton = screen.getByText(/Add Transaction/i);

  fireEvent.change(descriptionInput, { target: { value: "Test Transaction" } });
  fireEvent.change(amountInput, { target: { value: "100" } });
  fireEvent.change(categoryInput, { target: { value: "Test Category" } });
  fireEvent.click(addButton);

  const newTransaction = screen.getByText(/Test Transaction/i);
  expect(newTransaction).toBeInTheDocument();
});
