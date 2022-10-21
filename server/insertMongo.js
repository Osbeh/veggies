
// const { MongoClient } = require("mongodb")
import { MongoClient } from 'mongodb'
const mUrl = "mongodb://0.0.0.0:27017"
const client = new MongoClient(mUrl)

function insertMongo() {
    async function run() {
        try {
            const db = client.db("veggies")
            const fruits = db.collection("fruits")
            const fruit = await fineliFetch()
            const result = await fruits.insertOne(fruit)
            console.log('Doc inserted')
        } finally {
            await client.close()
        }
    }

    const fineliFetch = async () => {
        const res = await fetch('https://fineli.fi/fineli/api/v1/foods/11060');
        const json = await res.json();
        return json;
    }

    run().catch(console.dir)
}

export { insertMongo }


