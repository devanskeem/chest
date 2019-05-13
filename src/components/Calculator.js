import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            principle: 0,
            rate: 0,
            years: 0,
            addition: 0,
            numCompounds: 0,
            amount: 0.00
        }
    }

    calculate = (p, r, y, a, n) => {
        let rate = r/100
        let principleAmount = (p * Math.pow((1 + (rate/n)), (n*y)))
        let contributionAmount = a * ((Math.pow((1 + (rate/n)), (n*y))-1) / (rate/n))
        
        console.log("pa", principleAmount)
        console.log('ca', contributionAmount)
        let amount = (principleAmount + contributionAmount).toFixed(2);
        this.setState({
            amount
        })
        return amount;
    }

render() {
    let {principle, rate, years, addition, numCompounds, amount} = this.state
        return (
            <div className="calculator-container">
                <div className="calc-header">
                <h1>Compound Interest Calculator</h1>
                </div>
                {/* <h1>{this.calculate(1000, 5, 10, 1000, 1)}</h1> */}
                <div className="calc-input">
                    <h1>Principle: </h1>
                    <input type="number" onChange={(e) => this.setState({principle: e.target.value})}/>
                </div>
                <hr/>
                <div className="calc-input">
                    <h1>Estimated Rate: </h1>
                    <input type="number" onChange={(e) => this.setState({rate: e.target.value})}/>
                </div>
                <hr/>
                <div className="calc-input">
                    <h1>Time in years: </h1>
                    <input type="number" onChange={(e) => this.setState({years: e.target.value})}/>
                </div>
                <hr/>
                <div className="calc-input">
                    <h1>Compounds / year: </h1>
                    <input type="number" onChange={(e) => this.setState({numCompounds: e.target.value})}/>
                </div>
                <hr/>
                <div className="calc-input">
                    <h1>Contribution / compound: </h1>
                    <input type="number" onChange={(e) => this.setState({addition: e.target.value})}/>
                </div>
                <div className="calc-btn-wrapper">
                    <button className="calculate-btn" onClick={() => this.calculate(principle, rate, years, addition, numCompounds)}>Calculate</button>
                    <div className="calc-total">
                    <h1>${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                </div>
                </div>
                
                
            </div>
        )
    }

}

