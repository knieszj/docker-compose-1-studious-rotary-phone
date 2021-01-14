const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3001
//
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.30lbx.mongodb.net/${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`
const DATABASE_NAME = 'coffee'
const collection_name = 'people'
let database;
let collection;
//

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));













app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/heythere', (req, res) => {
    res.send('Hey there!')
})


app.listen(apiPort, () => {
    MongoClient.connect(CONNECTION_URL, {useNewUrlParser: true,  useUnifiedTopology: true  }, (error, client) =>{
        if (error) throw error
        database = client.db(DATABASE_NAME);
        collection = database.collection(`${collection_name}`)
        console.log(`Connected to ${DATABASE_NAME}!`)
    })
    console.log(`Server running on port ${apiPort}`)

})
