const express = require("express")
const router = express.Router()

const companyControler = require("./companyController")


router.post("/add-new-job", companyControler.addNewJob)
router.post("/get-all-jobs", companyControler.getAllJob)

module.exports = router