import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';

function App() {
  useEffect(()=>{
    console.log(`component loaded`);
    getMonths();
  })
  const[months, setMonths]=useState([]);

  const getMonths=()=>{
    axios.get('/calendar').then((response)=>{
      setMonths(response.data);
    }).catch((err)=>{
      console.log(err);
      alert(`error getting months`);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Select a Month</h1>
        <br />
      </header>
      <br />
      <MonthList months={months} />
    </div>
  );
}


export default App;
