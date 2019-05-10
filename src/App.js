import React from 'react';
import './App.css';
import NetWorth from './components/NetWorth';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <section className="app-content">
          <NetWorth/>
        </section>
    </div>
  );
}

export default App;
