import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses!</h2>
    }

    return props.items.map(function (el) {
        return <ul key={el.id} className='expenses-list'>
            <ExpenseItem
                date={el.date}
                title={el.title}
                price={el.price}
            />
        </ul>

    })
}
export default ExpensesList;
