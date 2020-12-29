import logo from '../logo.svg';
import './Application.scss';
import axios from "axios";
import { useEffect } from "react";

export default function Application() {

  const stub = false;

  useEffect(() => {
    Promise.all([
      axios.get('/tips/?tipIDs=[1,2,3]')
    ]).then(all => {
      console.log(all)
      })
    }, [stub]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>components/Application.js</code> and save to reload.
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
};
