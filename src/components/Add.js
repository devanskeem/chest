import React, {Component} from 'react'

export default class Add extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            type: '',
            value: 0
        }
    }

    nameHandler = (name) => {
        this.setState({
            name
        })
    }

    typeHandler = (type) => {
        this.setState({
            type
        })
    }

    valueHandler = (value) => {
        this.setState({
            value
        })
    }


    render(){
        let {show, addHandler} = this.props;
        let {name, type, value} = this.state
        const showHide = show ? "modal-show" : "modal-hide";
        return(
            <div className={showHide}>
                <section>
                    <form className="add-form">
                        <input placeholder="Name" type="text" onChange={(e) => this.nameHandler(e.target.value)}/>
                        <input placeholder="Type" type="text" onChange={(e) => this.typeHandler(e.target.value)}/>
                        <input placeholder="Value"type="number" onChange={(e) => this.valueHandler(e.target.value)}/>
                        <button className="modal-add-btn" onClick={() => addHandler(name, type, value)}>ADD</button>
                    </form>
                  
                    
                </section>

            </div>
        )
    }

}