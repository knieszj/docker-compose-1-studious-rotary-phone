const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')

const CoffeeBeanSchema = require(`../MongoModels/CoffeeBeans.model`)

router.get('/', ((req, res, next) => {
    CoffeeBeanSchema
        .find()
        .exec()
        .then(docs => {
            console.log("from the super cool MongoDB Atlas", docs);
            if (docs.length > 0) {
                res.status(200).json(docs)
            } else if (docs.length === 0) {
                // if length === 0, the database sent back an empty array and the connection is good but there is no data
                res.status(204).json(docs)
            }
            // There is no else statement for if .length is less than 0 since it would be an error and caught there
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        })
    // res.send(`getting a list of all the coffee beans....`)
}))

router.get(`/:CoffeeBeanID`, (req, res, next) => {
    const id = req.params.CoffeeBeanID;
    CoffeeBeanSchema.findById(id)
        .exec()
        .then(doc => {
            console.log("From the MongoDB Atlas database", doc)
            res.status(200).json(doc)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

router.post(`/`, (req, res, next) => {
    const coffeeBean = new CoffeeBeanSchema({
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

router.delete(`/:CoffeeBeanID`, (req, res, next) => {
    const id = req.params.CoffeeBeanID;
    CoffeeBeanSchema.remove({_id: id})
        .exec()
        .then(theResult => {
            res.status(200).json(theResult)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router;













