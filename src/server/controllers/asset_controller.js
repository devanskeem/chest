const assets = [
    { name: 'House', value: 200000, type: 'Property', id: 1 },
    { name: 'Mutual Fund', value: 50000, type: 'Stocks', id: 2 },
    { name: "Cash", value: 2000, type: 'Liquid', id: 3 },
    { name: 'Gold', value: 2500, type: 'Other', id: 4 },
    { name: 'House', value: 200000, type: 'Property', id: 5 },
    { name: 'Mutual Fund', value: 50000, type: 'Stocks', id: 6 },
    { name: "Cash", value: 2000, type: 'Liquid', id: 7 },
    { name: 'Gold', value: 2500, type: 'Other', id: 8 },
    { name: 'House', value: 200000, type: 'Property', id: 9 },
    { name: 'Mutual Fund', value: 50000, type: 'Stocks', id: 10 },
    { name: "Cash", value: 2000, type: 'Liquid', id: 11 },
    { name: 'Gold', value: 2500, type: 'Other', id: 12 },
    { name: 'House', value: 200000, type: 'Property', id: 13 },
    { name: 'Mutual Fund', value: 50000, type: 'Stocks', id: 14 },
    { name: "Cash", value: 2000, type: 'Liquid', id: 15 },
    { name: 'Gold', value: 2500, type: 'Other', id: 16 }
]
let id = assets.length + 1;
module.exports = {
    getAllAssets: (req, res) => {
        res.status(200).send(assets)
    },
    getAssetById: (req, res) => {
        const index = assets.findIndex(asset => asset.id === +req.params.id)
        if (index !== -1) {
            res.status(200).send(assets[index])
        }
        else res.status(500).send('Asset not found')
    },
    updateAsset: (req, res) => {
        let { name } = req.query;
        let { type } = req.query;
        let { value } = req.query;
        const index = assets.findIndex(asset => asset.id === +req.params.id)
        if (index !== -1) {
            assets[index] = {
                name: name ? name : assets[index].name,
                type: type ? type : assets[index].type,
                value: value ? +value : assets[index].value,
                id: assets[index].id
            }
        }
        res.status(200).send(assets)
    },

    addAsset: (req, res) => {
        let { name } = req.query;
        let { type } = req.query;
        let { value } = req.query;
        assets.push({
            name: name ? name : "Name",
            type: type ? type : "Type",
            value: value ? +value : "0",
            id
        })
        id++
        res.status(200).send(assets)
    },

    deleteAsset: (req, res) => {
        const index = assets.findIndex(asset => asset.id === +req.params.id)
        if (index !== -1) {
            assets.splice(index, 1)
        }
        res.status(200).send(assets)
    }


}