import React, { Component } from 'react'

export default class TableRow extends Component {
    constructor() {
        super()
        this.state = {
            editMode: false,
        }
    }
    
    toggleEdit = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    nameHandler = (name) => {
        this.props.asset.name = name;
    }

    typeHandler = (type) => {
        this.props.asset.type = type;
    }

    valueHandler = (value) => {
        this.props.asset.value = value;
    }

    deleteHandler = () => {
        let {title, asset, deleteAsset, deleteLiability} = this.props
        if (title === "Assets"){
            deleteAsset(asset.id);
        }
        else if (title === "Liabilities"){
            deleteLiability(asset.id);
        }
    }

    
    saveHandler = () =>{
        let {title, updateAsset, updateLiability, asset} = this.props;
        let {id, name, type, value} = asset;
        if (title === "Assets"){
            updateAsset(id, name, type, value);
        }
        else if (title === "Liabilities"){
            updateLiability(id, name, type, value);
        }
        this.toggleEdit();
    }

    tableRow = () => {
        let {editMode} = this.state
        let { name, type, value } = this.props.asset
        return (
            editMode ?
                <tr>
                    <td> <input placeholder="Name" type="text" onChange={(e) => this.nameHandler(e.target.value)}/></td >
                    <td><input placeholder="Type" type="text" onChange={(e) => this.typeHandler(e.target.value)}/></td>
                    <td><input placeholder="Value (numbers only)" type="number" onChange={(e) => this.valueHandler(e.target.value)}/></td>
                    <td id="btn-block">
                        <button className="edit-btn" onClick={this.saveHandler}>Save</button>
                        <button className='delete-btn'>X</button>
                    </td>
                </tr>
                :
                <tr>
                    <td>{name}</td>
                    <td>{type}</td>
                    <td>${value}</td>
                    <td id="btn-block">
                        <button className="edit-btn" onClick={() => {this.toggleEdit()}}>Edit</button>
                        <button className="delete-btn" onClick={this.deleteHandler}>X</button>   
                    </td>
                </tr>
        )
    }
    
    render(){
        return this.tableRow();
    }


}