
import React from 'react';
import '../styles/calculator.css'
function Calculator(){
    let [firstNumber, setFirstNumber]=React.useState(0);
    let [secondNumber, setSecondNumber]=React.useState(0);
    let [operation, setOperation]=React.useState("");
    let[answer, setAnswer]=React.useState(0);
    const handleKeyClick = ()=>{

    }
    return(
        <div id='Calculator'>
            <div id="Display">
                <div>(firstNumber) + (secondNumber)=</div>
                <div id="answer">Ans</div>

            </div>
            <div className="keys">
                <div onClick={handleKeyClick}>7</div>
                <div onClick={handleKeyClick}>8</div>
                <div onClick={handleKeyClick}>9</div>
                <div >/</div>
            </div>
        </div>
    );
}
export default Calculator