const assets = []
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
        let { name } = req.body;
        let { type } = req.body;
        let { value } = req.body;
        assets.push({
            name,
            type,
            value: value ? +value : 0,
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