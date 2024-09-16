const express = require("express");

const RoiController = require('../controllers/RoiController');;

const router = express.Router();

router.post('/calculate', RoiController.Calculate)

module.exports= router;