
const liabilities = [
    {name: 'Car', value: -14000, type: 'Property', id: 1},
    {name: 'Beach House', value: -150000, type: 'Property', id: 2},
    {name: 'AMEX', value: -2200, type: 'Credit Card', id: 3},
    {name: 'Car', value: -14000, type: 'Property', id: 4},
    {name: 'Beach House', value: -150000, type: 'Property', id: 5},
    {name: 'AMEX', value: -2200, type: 'Credit Card', id: 6},
    {name: 'Car', value: -14000, type: 'Property', id: 7},
    {name: 'Beach House', value: -150000, type: 'Property', id: 8},
    {name: 'AMEX', value: -2200, type: 'Credit Card', id: 9}
]

module.exports = {
    getAllLiabilities: (req, res) => {
        res.status(200).send(liabilities)
    },
    getLiabilityById: (req, res) => {
        const index = liabilities.findIndex(lblty => lblty.id === +req.params.id)
        if (index !== -1){
            res.status(200).send(liabilities[index])
        }
        else res.status(500).send('Liability not found')
    },
    updateLiability: (req, res) => {
        let name = req.query.name;
        let type = req.query.type;
        let value = req.query.value;
        const index = liabilities.findIndex(lblty => lblty.id === +req.params.id)
            if (index !== -1){
            liabilities[index] = {
                name,
                type,
                value,
                id: liabilities[index].id
            }
        }
        res.status(200).send(liabilities)
    },

    addLiability: (req, res) => {
        let { name } = req.query;
        let { type } = req.query;
        let { value } = req.query;
        liabilities.push({
            name: name ? name : "Name",
            type: type ? type : "Type",
            value: value ? +value : "0",
            id
        })
        id++
        res.status(200).send(liabilities)
    },

    deleteLiability: (req, res) => {
        const index = liabilities.findIndex(liability => liability.id === +req.params.id)
        if (index !== -1) {
            liabilities.splice(index, 1)
        }
        res.status(200).send(liabilities)
    }
    
}