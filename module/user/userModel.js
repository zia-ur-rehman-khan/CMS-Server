let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true, index: true, required: true },
    password: { type: String },
    userRole: { type: String },
    createdAt: { type: Date, default: Date.now },
    companyDetails: {
        companyName: String,
        companyDescription: String,
    },
    studentDetails: {
        studentName: String,
        dateOfBirth: String,
        qualification: String
    }
});

const userModel = new mongoose.model("users", userSchema);

module.exports.createNewUser = (usersdetailes) => {
    return new Promise((resolve, reject) => {
        let userinstance = new userModel(usersdetailes);
        userinstance.save((err, user) => {
            if (err) {
                console.log(err, "unabel to create new user");
                return reject(err);
            }
            resolve(user);
        });
    });
};

module.exports.getUserByQueiry = (queiry) => {
    return new Promise((resolve, reject) => {
        userModel.findOne(queiry, (err, user) => {
            if (err) {
                console.log(err, "Unable to find user");
                return reject(err);
            }
            resolve(user);
        });
    });
};



module.exports.addStudentDetails = (query, studentDetailes) => {
    return new Promise((resolve, reject) => {
        userModel.updateOne(query, studentDetailes)
            .then(savedDetails => {
                console.log("student details add successfully ", savedDetails);
                resolve(savedDetails)
            })
            .catch(err => {
                console.log(err, "unabel to add student detailes");
                reject(err);
            })
    })
};

module.exports.addCompanyDetails = (query, companyDetailes) => {
    return new Promise((resolve, reject) => {
        userModel.updateOne(query, companyDetailes)
            .then(savedDetails => {
                console.log("company details add successfully ", savedDetails);
                resolve(savedDetails)
            })
            .catch(err => {
                console.log(err, "unabel to add company detailes");
                reject(err);
            })
    })
};