import { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
  const [count, setCount] = useState(0);
  return(
    <div className="card">
      <h2 className="count">{count}</h2>
      <button onClick={
        () => setCount(count + 1)
      } className="plus-btn">+</button>
      
      <button 
       onClick={
        () => setCount(0)
      }
      className="reset-btn">Reset</button>

      <button
       onClick={
        () => setCount(count - 1)
      }
      className="minus-btn">-</button>
    </div>
  );
}

export default CounterApp;