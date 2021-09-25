import './App.css';
import Expenses from './components/Expense/Expenses';

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


  return (
    <Expenses item={expenses}></Expenses>
  );
}

export default App;
