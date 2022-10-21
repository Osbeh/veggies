import express from 'express';
const app = express()
import { insertMongo } from './insertMongo.js'
const port = 4000

app.get('/', async (req, res) => {
    // res.send('Hello World');
    console.log(req.query)
    const mongoRes = insertMongo(req.query)
    res.send({body:'Success'})
});

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



