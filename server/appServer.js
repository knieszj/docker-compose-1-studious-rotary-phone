const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3001
const mongoose = require('mongoose')
require('dotenv').config()

const CoffeeBeans = require('./Routes/CoffeeBeans.route')
const FrenchPress = require('./Routes/FreedomPress.route')

const CONNECTION_URL = `mongodb+srv://cluster0.30lbx.mongodb.net/${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`
const databaseName = 'coffee'

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())

mongoose.connect(CONNECTION_URL,
    {
        dbName: `${databaseName}`,
        user: `${process.env.MONGO_USERNAME}`,
        pass: `${process.env.MONGO_PASSWORD}`,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Mongoose connected us to MongoDB Atlas')
    })


app.use('/api/CoffeeBeans', CoffeeBeans)
app.use('/api/FreedomPress', FrenchPress)


app.use((req, res, next) => {
    const err = new Error(`Didn't find it`);
    err.status = 404;
    next(err)
})

//error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(apiPort, () => {
    console.log(`Server running on port ${apiPort}`)
})
