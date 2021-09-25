import './Card.css'


function Card(props){
    console.log(props);
    const className ="card "+props.className; 
    return <div className={className}>{props.children}</div>;
}

export default Card;