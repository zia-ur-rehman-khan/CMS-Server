let mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    companyName: String,
    companyId: String,
    jobtitle: String,
    salaryPakage: String,
    requirement: String,
    post: String,
    designation: String,
    description: String,
    appliedUsers: [
        {
            userId: String,
            userName: String,
        }
    ]
});

const jobModel = new mongoose.model("company", jobSchema);

module.exports.addNewJobInDB = (jobDetailes) => {
    return new Promise((resolve, reject) => {
        let jobInstance = new jobModel(jobDetailes);
        jobInstance.save((err, createdJob) => {
            if (err) {
                console.log(err, "unabel to create new job");
                return reject(err);
            }
            resolve(createdJob);
        });
    });
};
module.exports.getAllJobInDb = (query) => {
    return new Promise((resolve, reject) => {
        jobModel.find(query, (err, jobs) => {
            if (err) {
                console.log(err, "Unable to get all jobs");
                return reject(err);
            }
            resolve(jobs);
        });
    });
};

module.exports.userApplyOnJob = (query, update) => {
    return new Promise((resolve, reject) => {
        jobModel.updateOne(query, update)
            .then(updateResponse => {
                console.log("User apply successfully ", updateResponse);
                resolve(updateResponse)
            })
            .catch(err => {
                reject(err);
            })
    });
};
