const { Router } = require("express");
const router = Router();

//const expoController = require("../controllers/expo.js");
const { getExpos, createExpo } = require("../controllers/expo.js");
// prettier-ignore
router.route("/")
    .get(getExpos)
    .post(createExpo);

module.exports = router;
