const express = require("express")
const router = express.Router()

const companyControler = require("./companyController")

router.post("/add-new-job", companyControler.addNewJobInDB)

module.exports = router