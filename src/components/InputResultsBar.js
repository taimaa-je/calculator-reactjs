import classes from './InputResultsBar.css';

const InputResultsBar = ({calculation,result}) =>{
    return <div className={classes.input}>
    <div className={classes.result}>{result}</div>
    <div className={classes.calculation}><h1>{calculation}</h1></div>
    </div>
}
export default InputResultsBar;