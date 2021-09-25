import './ExpenseDate.css'


const ExpenseDate = (props) => {
    const day= props.date.toLocaleString('en-US',{'day':'2-digit'});
    const month= props.date.toLocaleString('en-US',{'month':'long'});
    const year= props.date.getFullYear();
  
    return (
    <div className="expense-date">
        <div className="expense-date__day" >{day}</div>
        <div className="expense-month__day">{month}</div>
        <div className="expense-year__day">{year}</div>
    </div>
    );
}
export default ExpenseDate