import './NewExpense.css'
import './NewExpenseForm'
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {

    const getSubmittedForm = (data) =>{
        // console.log("getSubmittedForm");
        props.onSaveExpenseData(data);
    }

return (
    <div className="new-expense">
        <NewExpenseForm onSaveExpenseData={getSubmittedForm}></NewExpenseForm>
    </div>
    );
}

export default NewExpense;