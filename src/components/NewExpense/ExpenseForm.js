import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  }

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  }

  const submitHandler = event => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="button">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm

// import React, { useState } from 'react'
// import './ExpenseForm.css'

// function ExpenseForm(props) {
//   const [input, setInput] = useState({})

//   const titleChangeHandler = value => {
//     // setInput({
//     //   ...input,
//     //   title: value.target.value,
//     // })
//     setInput(pervState => {
//       return { ...pervState, title: value.target.value }
//     })
//   }

//   const amountChangeHandler = value => {
//     setInput(pervState => {
//       return { ...pervState, amount: value.target.value }
//     })
//   }

//   const dateChangeHandler = value => {
//     setInput(pervState => {
//       return { ...pervState, date: new Date(value.target.value) }
//     })
//   }

//   const submitHandler = e => {
//     e.preventDefault()
//     props.onSaveExpenseData(input)
//     setInput({
//       title: '',
//       amount: '',
//       date: '',
//     })
//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             onChange={value => titleChangeHandler(value)}
//             value={input.title}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label htmlFor="amount">Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             id="amount"
//             onChange={amountChangeHandler}
//             value={input.amount}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label htmlFor="date">Date</label>
//           <input
//             type="Date"
//             min="2019-01-01"
//             max="2022-12-31"
//             id="date"
//             onChange={dateChangeHandler}
//             value={input.date}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expenses</button>
//       </div>
//     </form>
//   )
// }

// export default ExpenseForm
