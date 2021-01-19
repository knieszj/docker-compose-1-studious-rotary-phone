const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')

const CoffeeBeanSchema = require(`../MongoModels/CoffeeBeans.model`)

router.get('/', ((req, res, next) => {
    res.send(`getting a list of all the coffee beans....`)
}))

router.post(`/`, (req, res, next) => {

    const coffeeBean = new CoffeeBeanSchema ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        weight: req.body.weight,
        price: req.body.price,
    });

    coffeeBean
        .save()
        .then(result => console.log(result))
        .catch(err => console.log(err))

    res.status(201).json({
        message: `handling POST requests to /api/CoffeeBeans`,
        createdCoffeeBean: coffeeBean
    });


})

module.exports = router;
