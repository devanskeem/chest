import React, {Component} from 'react'
import axios from 'axios'
import Table from './Table'
export default class NetWorth extends Component{
    constructor() {
        super()
        this.state = {
            assets: [],
            liabilities: [],
            netWorth: 0,
        }
    }
    componentDidMount(){
        axios.get('/api/assets').then((res) => {
            this.setState({
                assets: res.data

            })
        })
        axios.get('/api/liabilities').then((res) => {
            this.setState({
                liabilities: res.data
            })
        })
        setTimeout(() => {
            this.setState({
                netWorth: this.getNetWorth()
            })
        }, 1500)

    }
    getNetWorth(){
        let assetsTot = this.state.assets.reduce((total, element) => total += parseInt(element.value), 0)
        
        let liabTot = this.state.liabilities.reduce((total, element) => total += parseInt(element.value), 0)

        return assetsTot + liabTot;
    }

    updateAsset = (id, name, type, value) => {
        axios.put(`/api/assets/${id}?name=${name}&type=${type}&value=${value}`).then((res) => {
            this.setState({
                assets: res.data
            })
        })
        this.setState({
            netWorth: this.getNetWorth()
        })
    }
    updateLiability = (id, name, type, value) => {
        axios.put(`/api/liabilities/${id}?name=${name}&type=${type}&value=${value}`).then((res) => {
            this.setState({
                liabilities: res.data
            })
        })
        this.setState({
            netWorth: this.getNetWorth()
        })
    }
    
    addAsset = (name, type, value) => {
        axios.post(`/api/assets/?name=${name}&type=${type}&value=${value}`).then((res) => {
            this.setState({
                assets: res.data
            })
        })
    }
    addLiability = (name, type, value) => {
        axios.post(`/api/liabilities/?name=${name}&type=${type}&value=${value}`).then((res) => {
            this.setState({
                liabilities: res.data
            })
        })
    }

    deleteAsset = (id) => {
        axios.delete(`/api/assets/${id}`).then((res) => {
            this.setState({
                assets: res.data
            })
        })
    }

    deleteLiability = (id) => {
        axios.delete(`/api/liabilities/${id}`).then((res) => {
            this.setState({
                liabilities: res.data
            })
        })
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
                        <h1>{`$${this.state.netWorth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                        </h1>
                    </div>
                    
                    <div className="nw-content">
                        <Table title="Assets" assets={this.state.assets} updateAsset={this.updateAsset} deleteAsset={this.deleteAsset} addAsset={this.addAsset}/>
                        <Table title="Liabilities" assets={this.state.liabilities} updateLiability={this.updateLiability} deleteLiability={this.deleteLiability} addLiability={this.addLiability}/>
                    </div>
                </div>
            </section>
        )
    }
}