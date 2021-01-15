const express = require('express');
const router = express.Router()

router.get('/',((req, res, next) => {
    res.send(`getting a list of all the coffee beans....`)
}))

module.exports = router;
