const express = require('express')
const app = express()
const ac = require('./controllers/asset_controller')
const lc = require('./controllers/liability_controller')

app.use(express.json())

app.get('/api/assets', ac.getAllAssets)
app.get('/api/assets/:id', ac.getAssetById)

app.get('/api/liabilities', lc.getAllLiabilities)
app.get('/api/liabilities/:id', lc.getLiabilityById)

app.put('/api/assets/:id', ac.updateAsset)
app.put('/api/liabilities/:id', lc.updateLiability)

app.post('/api/liabilities/', lc.addLiability)
app.post('/api/assets/', ac.addAsset)

app.delete('/api/assets/:id', ac.deleteAsset)
app.delete('/api/liabilities/:id', lc.deleteLiability)



const PORT = 1234
app.listen(PORT, () => console.log(`nodemon is fighting @ ${PORT}`))