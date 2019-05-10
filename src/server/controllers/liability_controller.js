
const liabilities = [
    {name: 'Car', value: -14000, type: 'Property', id: 1},
    {name: 'Beach House', value: -150000, type: 'Property', id: 2},
    {name: 'AMEX', value: -2200, type: 'Credit Card', id: 3}
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
    }
    
}