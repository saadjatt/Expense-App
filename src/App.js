import './App.css';
import { useState } from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses=[
    {
      'id':1,
      'title':'Tea',
      'amount':10,
      'date':new Date(2021, 7,12)
    },
    {
      'id':2,
      'title':'Sugar',
      'amount':100,
      'date':new Date(2021, 7,12)
    },
    {
      'id':3,
      'title':'Milk',
      'amount':150,
      'date':new Date(2021, 7,12)
    }
  ]
  const getSubmittedForm = (data) =>{
    console.log("on APP.JS");
    console.log(data);
    
  
  }

  return (
    <div>
      <NewExpense onSaveExpenseData={getSubmittedForm} />
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
