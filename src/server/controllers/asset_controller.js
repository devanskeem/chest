const assets = [
    {name: 'House', value: 200000, type: 'Property', id: 1},
    {name: 'Mutual Fund', value: 50000 ,type: 'Stocks', id: 2},
    {name: "Cash", value: 2000, type: 'Liquid', id: 3},
    {name: 'Gold', value: 2500, type: 'Other', id: 4},
    {name: 'House', value: 200000, type: 'Property', id: 1},
    {name: 'Mutual Fund', value: 50000 ,type: 'Stocks', id: 2},
    {name: "Cash", value: 2000, type: 'Liquid', id: 3},
    {name: 'Gold', value: 2500, type: 'Other', id: 4},
    {name: 'House', value: 200000, type: 'Property', id: 1},
    {name: 'Mutual Fund', value: 50000 ,type: 'Stocks', id: 2},
    {name: "Cash", value: 2000, type: 'Liquid', id: 3},
    {name: 'Gold', value: 2500, type: 'Other', id: 4},
    {name: 'House', value: 200000, type: 'Property', id: 1},
    {name: 'Mutual Fund', value: 50000 ,type: 'Stocks', id: 2},
    {name: "Cash", value: 2000, type: 'Liquid', id: 3},
    {name: 'Gold', value: 2500, type: 'Other', id: 4}
]

module.exports = {
    getAllAssets: (req, res) => {
        res.status(200).send(assets)
    },
    getAssetById: (req, res) => {
        const index = assets.findIndex(asset => asset.id === +req.params.id)
        if (index !== -1){
            res.status(200).send(assets[index])
        }
        else res.status(500).send('Asset not found')
    },
    updateAsset: (req, res) => {
        let {name} = req.query;
        let {type} = req.query;
        let {value} = req.query;
        const index = assets.findIndex(asset => asset.id === +req.params.id)
        if (index !== -1){
            assets[index] = {
                name: name ? name : assets[index].name,
                type: type ? type : assets[index].type,
                value: value ? +value : assets[index].value,
                id: assets[index].id
            }
        }
        res.status(200).send(assets)
    }
}