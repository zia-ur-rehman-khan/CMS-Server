const express = require("express")
const router = express.Router()

const userControler = require("./userControler")

router.post("/signup", userControler.signpWithDetailes)
router.post("/signin", userControler.signinwithDetailes)
router.post("/add-student-detailes", userControler.addStudentDetails)
router.post("/add-company-detailes", userControler.addCompanyDetails)


module.exports = router