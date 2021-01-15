const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeeBeanSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        required: true,
    }
});

const CoffeeBeans = mongoose.model('coffeebeans', CoffeeBeanSchema);

module.exports = CoffeeBeans;
