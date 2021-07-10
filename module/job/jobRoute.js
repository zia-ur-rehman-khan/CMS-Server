const express = require("express")
const router = express.Router()

const jobControler = require("./jobController")


router.post("/add-new-job", jobControler.addNewJob)
// router.get("/get-all-jobs", jobControler.getAllJob)
router.post("/user-apply-job", jobControler.userApplyInJob)

module.exports = router