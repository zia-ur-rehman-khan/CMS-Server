let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    firstName: { type: String },
    email: { type: String, unique: true, index: true, required: true },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const userModel = new mongoose.model("users", userSchema);

module.exports.createNewUser = (usersdetailes) => {
    return new Promise((resolve, reject) => {
        let userinstance = new userModel(usersdetailes);
        userinstance.save((err, user) => {
            if (err) {
                console.log(err, "error hai bhai");
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
                console.log(err, "error hai bhai");
                return reject(err);
            }
            resolve(user);
        });
    });
};