import { useState } from 'react'
import './App.css'

function App() {
  const [calculate, setCalculate] = useState("");

    const handleClick = (e) => {
      setCalculate(calculate.concat(e.target.name));
    }
    const clear = () => {
      setCalculate("");
    }
    const del = () => {
      setCalculate(calculate.slice(0, -1));
    }
    const percent = () => {
      setCalculate(calculate/ 100);
    }
    const result = () => {
        try {
          setCalculate(eval(calculate).toString());
        } catch(err) {
          setCalculate("Err")
        }        
    }
  return (
    <div className="calculator">
    <div className="output">
                <h1>{calculate}</h1>
           </div>
<div className="input">
  <div className="num1">
 <button className="greybutton" onClick={clear}>AC</button>
 <button className="greybutton" onClick={del}>C</button>
 <button className="greybutton" name="%"onClick={percent}>%</button>
 <button className="orange" name="/"onClick={handleClick}>/</button>
</div>
<div className="num2">
 <button name="7"onClick={handleClick}>7</button>
 <button name="8"onClick={handleClick}>8</button>
 <button name="9"onClick={handleClick}>9</button>
 <button  className="orange" name="*"onClick={handleClick}>X</button>
</div>
<div className="num3">
 <button name="4"onClick={handleClick}>4</button>
 <button name="5"onClick={handleClick}>5</button>
 <button name="6"onClick={handleClick}>6</button>
 <button className="orange"name="-"onClick={handleClick}>-</button>
</div>
<div className="num4">
 <button name="1"onClick={handleClick}>1</button>
 <button name="2"onClick={handleClick}>2</button>
 <button name="3"onClick={handleClick}>3</button>
 <button className="orange" name="+"onClick={handleClick}>+</button>
</div>
<div className="num5">
 <button name="0"className="zero" onClick={handleClick}>0</button>
 <button name="."onClick={handleClick}>.</button>
 <button className="orange" onClick={result}>=</button>
</div>
</div>
</div>
  )
}

export default App
