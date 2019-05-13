
const liabilities = []
let id = liabilities.length + 1;
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
            name,
            type,
            value: value ? +value : 0,
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