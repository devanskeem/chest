import React, { Component } from 'react';
import TableRow from './TableRow'

export default class Table extends Component {
    addHandler = (name, type, value) => {
        let {title, addAsset, addLiability} = this.props
        if (title === "Assets"){
            addAsset(name, type, value);
        }
        else if (title === "Liabilities"){
            addLiability(name, type, value);        
        }
    }
    render() {
        //destructuring props
        let { title, assets, updateAsset, updateLiability, addAsset, addLiability, deleteAsset, deleteLiability } = this.props;
        //creates a table of assets and buttons
        let assetList = assets.map((element, index) => {
            return (
                <TableRow title={title} updateAsset={updateAsset} updateLiability={updateLiability} addAsset={addAsset} addLiability={addLiability} deleteAsset={deleteAsset} deleteLiability={deleteLiability} key={index} asset={element} />
            )
        })

        return (
            <div className="table-wrapper">
                <div className="table-card">
                    <h3>{title}</h3>

                    <table className="nw-table">
                        <col width="180px" />
                        <col width="180px" />
                        <col width="180px" />
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

                    <button className="add-btn" onClick={() => this.addHandler('test', 'test', 25)}>ADD NEW</button>
                </div>
            </div>

        )
    }

}