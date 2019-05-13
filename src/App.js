import React from 'react';
import './App.css';
import NetWorth from './components/NetWorth';
import Header from './components/Header';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
        <Header/>
        
        <section className="app-content">
          <NetWorth/>
        </section>
        
        <div className="app-footer"> 
          <Footer/>
        </div>
       
    </div>
  );
}

export default App;
