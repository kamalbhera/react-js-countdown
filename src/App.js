import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timeout = null
    if (counter <= 0) {
      return () => clearTimeout(timeout)
    }
    if (isActive) {
      timeout = setTimeout(() => {
        setCounter(counter - 1)
      }, 1000);
    }
  }, [isActive, counter]);

  function startTimer() {
    setCounter(10);
    setIsActive(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          type="button"
          onClick={() => startTimer()}
        >
          Start
        </button>
        <p>{counter}</p>
      </header>
    </div>
  );
}

export default App;
