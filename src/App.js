import { useState } from 'react';
import Card from './components/UI/Card'
import NewExpense from './components/NewExpense/NewExpense';
import Filter from './components/Expenses/Filter';
import ExpensesList from './components/Expenses/ExpensesList';
import ExpensesChart from './components/Expenses/ExpensesChart';
import './components/Expenses/Expenses.css'

function App() {

  const localExpenses = [
    {
      id: 1,
      date: new Date(2022, 5, 23),
      title: "Car Insurance",
      price: 12.67
    },
    {
      id: 2,
      date: new Date(2019, 4, 2),
      title: "Ice Cream",
      price: 4.67
    },
    {
      id: 3,
      date: new Date(2019, 1, 5),
      title: "House Toy",
      price: 43.67
    },
    {
      id: 4,
      date: new Date(2021, 2, 3),
      title: "Toilet Paper",
      price: 4.79
    },
    {
      id: 5,
      date: new Date(2022, 1, 2),
      title: "Coca-cola",
      price: 2.09
    },
    {
      id: 6,
      date: new Date(2022, 3, 13),
      title: "Bread",
      price: 1.99
    }
  ];

  const [expenses, setExpenses] = useState(localExpenses)
  const [selectedYear, setSelectedYear] = useState('2019')

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  const GetSelectedYear = (year) => {

    setSelectedYear(year)

  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  return (
    <div style={{backgroundColor: "#0c0c0c82"}}>
    <Card className='expenses'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Filter selected={selectedYear} onGetSelectedYear={GetSelectedYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
    </div>
  );
}
export default App;
