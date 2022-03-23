import classes from './Button.module.css';

const Button = ({symbol,handleClick})=>{
    return( <div className={classes.button} onClick={()=>handleClick(symbol) }>
    
    {symbol}</div>)
}

export default Button;