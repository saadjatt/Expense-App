import { useState } from 'react';
import './NewExpenseForm.css'

const NewExpenseForm = (props) =>{

    const [getTitle,setTitle]=useState('');
    const [getAmount,setAmount]=useState('');
    const [getDate,setDate]=useState('');
    const getTitleChanged = (event)=>{
        setTitle(event.target.value);
    }
    const getAmountChanged = (event)=>{
        setAmount(event.target.value);
    }
    const getDateChanged = (event)=>{
        setDate(event.target.value);
    }

    const onFormSubmit =(event) =>{
        event.preventDefault();
        const formData={
            'id': Math.random.toString(),
            'title':getTitle,
            'amount':getAmount,
            'date':new Date(getDate),
        }
       
        props.onSaveExpenseData(formData);
        setTitle('');
        setAmount('');
        setDate('');
        
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={getTitleChanged}  value={getTitle} />
                
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  onChange={getAmountChanged} value={getAmount} />
                
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={getDateChanged} value={getDate} />
                
                </div>
                <div className="new-expense__actions">
                    <button>Add Expense</button>
                </div>
            </div>    
        </form>
    );
}


    

export default NewExpenseForm;