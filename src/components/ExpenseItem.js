import Card from './Card';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props){
    console.log("ExpenseItem");          
    
    console.log(props);          
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs.{props.amount}</div>
            </div>
        </Card>    
    );
}

export default ExpenseItem;