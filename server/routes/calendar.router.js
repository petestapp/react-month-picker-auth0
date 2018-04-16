var express = require('express');
var router = express.Router();
var monthItems = require('../modules/calendar.data');

// DO NOT MODIFY THIS FILE

// GET Route
router.get('/', function (req, res) {
    res.send(monthItems);
}); // END GET Route

module.exports = router;