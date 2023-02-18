import React,{useState} from "react";
import './style.css'
const App = ()=>{
    const [number, setNumber]=useState(0)
    return(
        <div>
        <center>
          <h2>SIMPLE COUNTER APP</h2>
        </center>
        <div className="counter-container">
          <h1>Counter: <span id="counter">{number}</span></h1>
          <div className="button-container">
            <button onClick={() => setNumber(number + 1)} className="button">Increment </button>
            <button onClick={() => setNumber(number - 1)} className="button">Decrement </button>
            <button onClick={() => setNumber(0)} className="button">Reset </button>
          </div>
        </div>
        <footer>
        <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Designed by Gaurav Chapagain</p>
        </footer>
      </div>
    );
  };
    

export default App;