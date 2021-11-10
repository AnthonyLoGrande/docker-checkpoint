import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



function App() {

  async function getProducts() {
    let res = await fetch("http://localhost:3002");
    let data = await res.json();
    setState(data);
    console.log(data)
  }

  const [state, setState] = useState()

  getProducts();



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <div className="App Data">
           {JSON.stringify(state)}
         </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
