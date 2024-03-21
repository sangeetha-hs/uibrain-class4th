import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
// import CssCard from './Components/CssCard';
import Employee from './Components/Employee';

function App() {
  return (
    <div className="App">
     <Navbar/>
      {/* <CssCard message="sangeetha"/>
      <CssCard message="good afternoon"/> */}
       <Employee name="rajan" age="25" designation="softwareengineer"/>
    </div>
   
  );
}

export default App;
