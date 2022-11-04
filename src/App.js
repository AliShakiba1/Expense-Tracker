import React, { useState } from 'react'
import Chart from './components/Chart/Chart'
import Expenses from './components/Expemses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Book Test',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ])

  const addExpenseHandler = value => {
    setExpenses(pervState => [...pervState, value])
  }

  return (
    <React.Fragment>
      <h2 style={{ textAlign: 'center' }}>Let's get started!</h2>
      {/* <Chart /> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </React.Fragment>
  )
}

export default App
