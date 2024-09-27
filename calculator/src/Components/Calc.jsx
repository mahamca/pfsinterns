import React, { useState } from 'react';


const Calc = () => {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    setInput(input + value);
      };

  const clear = () => {
    setInput('');
  };

  const calculate = () => {
   setInput(eval(input));
   
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
       
      <button onClick={()=>handleClick(0)}>0</button> <button onClick={()=>calculate()}>=</button> <button onClick={()=>handleClick('%')}>%</button> <button onClick={()=>handleClick('/')}>/</button>
      <button onClick={()=>handleClick(7)}>7</button> <button onClick={()=>handleClick(8)}>8</button> <button onClick={()=>handleClick(9)}>9</button> <button onClick={()=>handleClick('*')} >*</button>
      <button onClick={()=>handleClick(4)}>4</button> <button onClick={()=>handleClick(5)}>5</button> <button onClick={()=>handleClick(6)}>6</button> <button onClick={()=>handleClick('-')}>-</button>
       <button onClick={()=>handleClick(1)}>1</button> <button onClick={()=>handleClick(2)}>2</button> <button>3</button> <button onClick={()=>handleClick('+')}>+</button>
       <button onClick={clear}>clear</button>
      </div>
    </div>
  );
};

export default Calc;
