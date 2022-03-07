import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount]= useState(props.amount);

    const myFun = () => {
        setTitle("Updated");
        setAmount(100);

        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">Rs.{amount}</div>
            </div>
            <button onClick={myFun}>Click me</button>
        </Card>    
    );
}

export default ExpenseItem;