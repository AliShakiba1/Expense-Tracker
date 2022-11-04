import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseDate = { ...enteredExpenseData, id: Math.random().toString() }
    props.onAddExpense(expenseDate)
    setIsEditing(false)
  }

  const showExpenseFormHandler = e => {
    e.preventDefault()
    setIsEditing(true)
  }

  return (
    <Card className="new-expense">
      {!isEditing && (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={value => {
            saveExpenseDataHandler(value)
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </Card>
  )
}

export default NewExpense
