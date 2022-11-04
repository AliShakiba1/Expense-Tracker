import React, { useState } from 'react'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesList from './ExpensesList'

import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [year, setYear] = useState('2020')

  const YearHandler = e => {
    console.log(e)
    setYear(e)
  }

  const filterExpenses = props.items.filter(item => {
    return item.date.getFullYear().toString() === year
  })

  // const expenses = filterExpenses.map((item, id) => {
  //   return (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     />
  //   )
  // })

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter onYearPick={e => YearHandler(e)} selected={year} />
        <ExpensesChart expense={filterExpenses} />
        <ExpensesList onFilterList={filterExpenses} />
        {/* {filterExpenses.length > 0 &&
          filterExpenses.map((item, id) => {
            return (
              <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
              />
              )
            })}
            {filterExpenses.length === 0 && (
              <h1 style={{ color: 'white', textAlign: 'center' }}>
                No Expenses Found.
              </h1>
            )} */}
      </Card>
    </li>
  )
}

export default Expenses
