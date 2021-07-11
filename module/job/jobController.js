const jobModel = require("./jobModel");

module.exports.addNewJob = (req, res) => {
    console.log(req.body + '>>>>>>>>>>>>')
    jobModel
        .addNewJobInDB(req.body)
        .then((companyDetails) => {
            console.log(companyDetails, "company details add succesfully");
            res.send({ status: true, companyDetails: companyDetails });
        })
        .catch((err) => {
            console.log(err);
            res.send({ status: false });
        });
};


module.exports.deleteJobById = (req, res) => {
    console.log(req.body + '>>>>>>>>>>>>')
    jobModel
        .deleteJobById({ _id: req.body })
        .then((companyDetails) => {
            console.log(companyDetails, "company details delete succesfully");
            res.send({ status: true, companyDetails: companyDetails });
        })
        .catch((err) => {
            console.log(err);
            res.send({ status: false });
        });
};


module.exports.getAllJob = (req, res) => {
    console.log(req.body + '>>>>>>>>>>>>')
    jobModel
        .getAllJobInDb({})
        .then((jobDetails) => {
            console.log(jobDetails, "jobs found successfully");
            res.send({ status: true, jobDetails: jobDetails });
        })
        .catch((err) => {
            console.log(err);
            res.send({ status: false });
        });
};

module.exports.userApplyInJob = (req, res) => {
    console.log(req.body + '>>>>>>>>>>>>')
    let updates = {
        $push: {
            appliedUsers: {
                userId: req.body.userId,
                userName: req.body.userName,
            }
        }
    }
    jobModel.userApplyOnJob({ _id: req.body.jobId }, updates)
        .then(appliedUser => {
            console.log(appliedUser + "User Apply Successfuly")
            res.send({
                status: true, appliedUser: {
                    userId: req.body.userId,
                    userName: req.body.userName,
                }
            })
        })
        .catch(err => {
            console.log(err + "user cannot applied successfully")
            res.send({
                status: false, error: err

            })
        })
}

