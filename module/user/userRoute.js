const express = require("express")
const router = express.Router()

const userControler = require("./userControler")

router.post("/signup", userControler.signpWithDetailes)
// router.post("/signin", userControler.signinwithDetailes)


module.exports = router