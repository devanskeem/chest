import React, { Component } from 'react';
import TableRow from './TableRow'

export default class Table extends Component {
    render() {
        //destructuring props
        let { title, assets, updateAsset, updateLiability } = this.props;
        //creates a table of assets and buttons
        let assetList = assets.map((element, index) => {
            return (
                <TableRow updateAsset={updateAsset} updateLiability={updateLiability} key={index} assets={element} />
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

                    <button className="add-btn">ADD NEW</button>
                </div>
            </div>

        )
    }

}