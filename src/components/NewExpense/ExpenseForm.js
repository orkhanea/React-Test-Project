import { useState } from 'react'
import './ExpenseForm.css'

const ComponentForm = (props) => {

    //Variant-1
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (e)=>{
        
        //Variant-1
        // setEnteredTitle(e.target.value);
        
        //Variant-2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })

        // Variant-3
        setUserInput((prevState)=>{
            return {...prevState, enteredTitle: e.target.value}
        })
    }
    
    const amountChangeHandler = (e)=>{

        //Variant-1
        // setEnteredAmount(e.target.value);
        
        //Variant-2
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })

        // Variant-3
        setUserInput((prevState)=>{
            return {...prevState, enteredAmount: e.target.value}
        })
    }
    
    const dateChangeHandler = (e)=>{
        
        //Variant-1
        // setEnteredDate(e.target.value);
        
        //Variant-2
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.targer.value
        // })

        // Variant-3
        setUserInput((prevState)=>{
            return {...prevState, enteredDate: e.target.value}
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();

        // Variant-1
        // const expenseData = {
        //     title: enteredTitle,
        //     amount: enteredAmount,
        //     date: new Date(enteredDate)
        // }

        // Variant-3
        const expenseData = {
            title: userInput.enteredTitle,
            price: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }


        
        props.onSaveExpenseData(expenseData);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

        props.onCancel()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input required type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input required type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input required type="Date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expence__actions' style={{textAlign: "end"}}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expence</button>
            </div>
        </form>
    );
}

export default ComponentForm;