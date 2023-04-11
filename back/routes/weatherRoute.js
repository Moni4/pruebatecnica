const express = require("express");
const router = express.Router();

const { checkKey } = require("../middleware/checkKey");

const {
    getData
} = require("../controllers/weatherController")

router.get("/:key", checkKey, getData);

module.exports = router;