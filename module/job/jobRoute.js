const express = require("express")
const router = express.Router()

const jobControler = require("./jobController")


router.post("/add-new-job", jobControler.addNewJob)
router.post("/delete-job-by-id", jobControler.deleteJobById)
router.post("/get-all-jobs", jobControler.getAllJob)
router.post("/user-apply-job", jobControler.userApplyInJob)

module.exports = router