import React, { useState, useEffect } from 'react';
import '../Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    setResult(''); 
  }, [input]);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'DEL') {
      setInput((prevInput) => prevInput.slice(0, -1));
    
    } else if (value === 'pow') {
      setInput((prevInput) => prevInput + '**');
    } else if (value === 'mod') {
      setInput((prevInput) => prevInput + '%');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttonValues = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', 'DEL', 'pow', 
    'mod', 
  ];

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
      <div className="buttons">
        {buttonValues.map((value, index) => (
          <button key={index} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
