let mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName: String,
    companyId: String,
    jobtitle: String,
    salaryPakage: String,
    requirement: String,
    post: String,
    designation: String,
    description: String,
});

const companyModel = new mongoose.model("company", companySchema);

module.exports.addNewJobInDB = (jobDetailes) => {
    return new Promise((resolve, reject) => {
        let companyinstance = new companyModel(jobDetailes);
        companyinstance.save((err, createdJob) => {
            if (err) {
                console.log(err, "unabel to add company detailes");
                return reject(err);
            }
            resolve(createdJob);
        });
    });
};
module.exports.getAllJobInDb = () => {
    return new Promise((resolve, reject) => {
        companyModel.find({}, (err, jobs) => {
            if (err) {
                console.log(err, "Unable to get all jobs");
                return reject(err);
            }
            resolve(jobs);
        });
    });
};
