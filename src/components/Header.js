import React from 'react'
import logo from '../images/chest.png'


export default function Header(){
    return(
        <div className="app-header"> 
            <div className="logo">
                <h1>C H E S T</h1>
                <img src={logo} alt="LOGO"></img>
            </div>
            <div className="header-quote"><h1>What's really in your wallet?</h1></div>
            
        </div>
    )
}