const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const port = 4000
require('dotenv').config();

const atlasUri = process.env.MONGODB_URI

mongoose.connect(atlasUri, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

app.use(cors({
    origin: '*'
}));

const fruitsRouter = require('./routes/fruits')
app.use('/fruits', fruitsRouter)

const vegetablesRouter = require('./routes/vegetables')
app.use('/vegetables', vegetablesRouter)

const rootsRouter = require('./routes/roots')
app.use('/roots', rootsRouter)



const fineliFetch = async (vegId) => {
    console.log(vegId)
    if (!vegId) return res.status(500).json({message: 'error no vegId'})
    // try {
        const res = await fetch(`https://fineli.fi/fineli/api/v1/foods/${vegId}`);
        if (!res.ok) {
            return({status:res.status})
        }
        const json = await res.json();
        return json;
}

app.get('/addveg', async (req, res, next) => {
    const vegId = req.query.id
    console.log(vegId)
    const fineliJson = await fineliFetch(vegId)
    console.log(fineliJson)
    if (fineliJson.status===500) {
        res.status(500).json({message:'bad fineli request'})
    } else {
    
    const nameFi = fineliJson.name.fi
    const objToSave = {
        name: fineliJson.name.fi.split(",")[0],
        id: parseInt(vegId),
        carbohydrate: fineliJson.carbohydrate,
        fat: fineliJson.fat,
        energyKcal: fineliJson.energyKcal,
        protein: fineliJson.protein,
        vegType: req.query.type
    }
     try {
    const postToMongo = await fetch(`http://localhost:4000/${req.query.type}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objToSave)
    }
    )
    res.status(postToMongo.status).json({message:postToMongo.statusText})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}
})


app.listen(port, () => console.log("listeninig on port ", port))

