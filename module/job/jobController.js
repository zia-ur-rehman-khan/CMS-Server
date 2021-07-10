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
                userId: '',
                userName: '',
            }
        }
    }
    jobModel.userApplyOnJob({ _id: req.body.bookId }, updates)
        .then(appliedUser => {
            console.log(appliedUser + "User Apply Successfuly")
            res.send({
                status: true, appliedUser: appliedUser
            })
        })
        .catch(err => {
            console.log(err + "user cannot applied successfully")
            res.send({
                status: false, error: err

            })
        })
}

