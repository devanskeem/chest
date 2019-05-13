import React, { Component } from 'react';
import TableRow from './TableRow'
import Add from './Add'
export default class Table extends Component {
    constructor(){
        super()
        this.state = {
            show: false
        }
    }
    showModal = () => {
        this.setState({show: true})
    }

    hideModal = () => {
        this.setState({show: false})
    }


    addHandler = (name, type, value) => {
        let {title, addAsset, addLiability} = this.props
        if (title === "Assets"){
            addAsset(name, type, value);
        }
        else if (title === "Liabilities"){
            if (value > 0) addLiability(name, type, -value);
            else addLiability(name, type, value);   
              
        }
    }


    render() {
        //destructuring props
        let { title, assets, updateAsset, updateLiability, addAsset, addLiability, deleteAsset, deleteLiability, total } = this.props;
        //creates a table of assets and buttons
        let assetList = assets.map((element, index) => {
            return (
                <TableRow className="table-row"title={title} updateAsset={updateAsset} updateLiability={updateLiability} addAsset={addAsset} addLiability={addLiability} deleteAsset={deleteAsset} deleteLiability={deleteLiability} key={index} asset={element} />
            )
        })

        return (
            <div className="table-wrapper">
                <div className="table-card">
                    <h3>{title}</h3>

                    <table className="nw-table">
                        <col width="140px" />
                        <col width="138px" />
                        <col width="138px" />
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assetList}
                        </tbody>

                    </table>
                    <div>
                        {
                            this.state.show ? <Add show={this.state.show} title={title} addHandler={this.addHandler}/>
                            : <div></div>

                        }
                    </div>
                    
                    <button className="add-btn" onClick={this.showModal}>NEW</button>
                </div>
            </div>

        )
    }

}