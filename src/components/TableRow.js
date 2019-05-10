import React, { Component } from 'react'

export default class TableRow extends Component {
    constructor() {
        super()
        this.state = {
            editMode: false

        }
    }

    toggleEdit = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    tableRow = () => {
        console.log(this.props)
        let { assets, updateAsset, updateLiability } = this.props
        let { editMode } = this.state;
        let name = 'jasdf';
        let type = assets.type;
        let value = assets.value;
        return (
            editMode ?
                <tr>
                    <td> <input placeholder="Name" type="text" /></td >
                    <td><input placeholder="Type" type="text" /></td>
                    <td><input placeholder="Value (numbers only)" type="number" /></td>
                    <td id="btn-block">
                        <button className="edit-btn" onClick={this.toggleEdit}>Save</button>
                        <button className='delete-btn'>X</button>
                    </td>
                </tr>
                :
                <tr>
                    <td>{assets.name}</td>
                    <td>{assets.type}</td>
                    <td>${assets.value}</td>
                    <td id="btn-block">
                        <button className="edit-btn" onClick={() => {this.toggleEdit(); console.log(this.state.editMode)}}>Edit</button>
                        <button className="delete-btn">X</button>
                    </td>
                </tr>
        )
}
    render(){
        return this.tableRow();
    }


}