// import express from 'express';
// import mongoose from 'mongoose'
const express = require('express')
const mongoose = require('mongoose')
const app = express()
// import { insertMongo } from './insertMongo.js'
// import fruitsRouter from './routes/fruits'
const port = 4000

mongoose.connect('mongodb://0.0.0.0:27017/veggies', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

const fruitsRouter = require('./routes/fruits')
app.use('/fruits', fruitsRouter)



const fineliFetch = async (vegId) => {
    console.log(vegId)
    if (!vegId) return res.status(500).json({message: 'error no vegId'})
    const res = await fetch(`https://fineli.fi/fineli/api/v1/foods/${vegId}`);
    const json = await res.json();
    return json;
}

app.get('/addveg', async (req, res) => {
    const vegId = req.query.id
    //console.log(req.query)
    //if (!vegId) res.status(500).json({message: 'error no vegid'})
    console.log(vegId)
    // const fineliJson = async (vegId) => {
    // //     if (!vegId) return res.status(500).json({message: 'error no vegId'})
    // //     const res = await fetch(`https://fineli.fi/fineli/api/v1/foods/${vegId}`);
    // //     const json = await res.json();
    // //     return json;
    // // }
    let fineliJson = await fineliFetch(vegId)
    const nameFi = fineliJson.name.fi
    const objToSave = {
        name: fineliJson.name.fi,
        id: parseInt(vegId),
        carbohydrate: fineliJson.carbohydrate,
        fat: fineliJson.fat,
        energyKcal: fineliJson.energyKcal,
        protein: fineliJson.protein,
        vegType: req.query.type
    }
    console.log(objToSave)
    try {
    const postToMongo = await fetch(`http://localhost:4000/${req.query.type}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objToSave)
    }
    )
    // console.log(postToMongo)
    res.status(postToMongo.status).json({message:postToMongo.statusText})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

// app.get('/', async (req, res) => {
//     // res.send('Hello World');
//    // console.log(req.query)
//     const mongoRes = insertMongo(req.query)
//     res.send({mongoRes})
// });

app.listen(port, () => console.log("listeninig on port ", port))

// const { MongoClient } = require("mongodb")


// const mUrl = "mongodb://0.0.0.0:27017"

// const client = new MongoClient(mUrl)

// async function run() {
//     try {
//         const db = client.db("veggies")
//         const fruits = db.collection("fruits")
//         const fruit = await fineliFetch()
//         const result = await fruits.insertOne(fruit)
//         console.log('Doc inserted')
//     } finally {
//         await client.close()
//     }
// }

// const fineliFetch = async () => {
//     const res = await fetch('https://fineli.fi/fineli/api/v1/foods/11060');
//     const json = await res.json();
//     return json;
// }

// run().catch(console.dir)



