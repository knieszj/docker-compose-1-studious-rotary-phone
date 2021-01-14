const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    name: String,
    ultimate: String,
})

module.exports = mongoose.model('CoffeeSchema', coffeeSchema)
