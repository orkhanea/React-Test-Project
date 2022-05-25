import { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isActive, setIsActive] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
        props.onAddExpense(expenseData)

    }

    const startEditingHandler = (e) =>{
        
        setIsActive(true);
    }

    const stopEditingHandler = (e) =>{
        
        setIsActive(false);
    }

    return (
        <div className='new-expense'>
            {!isActive && <button onClick={startEditingHandler} >Add New Expense</button>}
            {isActive && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense;