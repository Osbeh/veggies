
// const { MongoClient } = require("mongodb")
import { MongoClient } from 'mongodb'
const mUrl = "mongodb://0.0.0.0:27017"
const client = new MongoClient(mUrl)

function insertMongo(query) {
    const vegId = query.id
    const type = query.type
    async function run() {
        try {
            const db = client.db("veggies")
            const fruits = db.collection(type)
            const fruit = await fineliFetch()
            const result = await fruits.insertOne(fruit)
            console.log('Doc inserted')
            return 'Success'
        } catch (e) {
            return e;
        }
         finally {
            await client.close()
        }
    }

    const fineliFetch = async () => {
        const res = await fetch(`https://fineli.fi/fineli/api/v1/foods/${vegId}`);
        //console.log(res)
        const json = await res.json();
        return json;
    }

    run().catch(console.dir)

}

export { insertMongo }


