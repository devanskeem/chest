import React, {Component} from 'react'
import axios from 'axios'
import Table from './Table'
import Calculator from './Calculator'

export default class NetWorth extends Component{
    constructor() {
        super()
        this.state = {
            assets: [],
            liabilities: [],
            netWorth: 0,
            liabilitiesTotal: 0,
            AssetsTotal: 0
        }
    }
    componentDidMount(){
        axios.get('/api/assets').then((res) => {
            this.setState({
                assets: res.data
            })
        }).catch(console.log("could not get assets"))
        axios.get('/api/liabilities').then((res) => {
            this.setState({
                liabilities: res.data
            })
        }).catch(console.log("could not get liabilites"))
        setTimeout(() => {
            this.setState({
                netWorth: this.getNetWorth()
            })
        }, 1000)

    }
    getLiabilitiesTotal(){
        let liabTot = this.state.liabilities.reduce((total, element) => total += parseInt(element.value), 0)
        return liabTot;

    }
    getAssetsTotal(){
        let assetsTot = this.state.assets.reduce((total, element) => total += parseInt(element.value), 0)
        this.setState({
            AssetsTotal: assetsTot
        })
        return assetsTot;

    }


    getNetWorth(){
        let assetsTot = this.state.assets.reduce((total, element) => total += parseInt(element.value), 0)
        
        let liabTot = this.state.liabilities.reduce((total, element) => total += parseInt(element.value), 0)
        this.setState({
            netWorth: assetsTot + liabTot,
            assetsTotal: assetsTot,
            liabilityTotal: liabTot
        })

        return assetsTot + liabTot;

    }

    updateAsset = (id, name, type, value) => {
        axios.put(`/api/assets/${id}?name=${name}&type=${type}&value=${value}`).then((res) => {
            this.setState({
                assets: res.data
            })
        })
        this.getNetWorth();
    }
    updateLiability = (id, name, type, value) => {
        axios.put(`/api/liabilities/${id}?name=${name}&type=${type}&value=${value}`).then((res) => {
            this.setState({
                liabilities: res.data,
            })
        })
        this.getNetWorth();
    }
    
    addAsset = (name, type, value) => {
        axios.post(`/api/assets/?name=${name}&type=${type}&value=${value}`).then((res) => {
            this.setState({
                assets: res.data
            })
        })
        this.getNetWorth();
    }
    addLiability = (name, type, value) => {
        axios.post(`/api/liabilities/?name=${name}&type=${type}&value=${value}`).then((res) => {
            this.setState({
                liabilities: res.data
            })
        })
        this.getNetWorth();
    }

    deleteAsset = (id) => {
        axios.delete(`/api/assets/${id}`).then((res) => {
            this.setState({
                assets: res.data
            })
        })
        this.getNetWorth();
    }

    deleteLiability = (id) => {
        axios.delete(`/api/liabilities/${id}`).then((res) => {
            this.setState({
                liabilities: res.data
            })
        })
        this.getNetWorth();
    }


    toggleEdit = () => {
      this.setState({
          edit: !this.state.edit
      })
    }   

    render(){
        setTimeout(5500)
        return(
            <section className="nw-wrapper">
                <div className="nw-container">
                    <div className="nw-head">
                        <h1>Net Worth</h1>
                    </div>
                    <div className="nw-value">
                        {
                            this.state.netWorth >= 0 ?
                            <h1 id="positive-nw">{`$${this.state.netWorth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</h1>
                            :
                            <h1 id="negative-nw">{`$${this.state.netWorth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</h1>

                        }
                        
                    </div>
                    
                    <div className="nw-content">
                        <Table title="Assets" assets={this.state.assets} updateAsset={this.updateAsset} deleteAsset={this.deleteAsset} addAsset={this.addAsset} total={this.state.assetsTotal}/>
                        <Table title="Liabilities" assets={this.state.liabilities} updateLiability={this.updateLiability} deleteLiability={this.deleteLiability} addLiability={this.addLiability} total={this.state.liabilitiesTotal}/>
                    </div>
                </div>
                <Calculator/>
            </section>
        )
    }
}