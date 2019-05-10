import React, {Component} from 'react'
import logo from '../images/chest.png'
export default class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar"> 
                <div className="logo">
                    <h1>C H E S T</h1>
                    <img src={logo} alt="LOGO"></img>
                </div>
            </div>
        )
    }
}

