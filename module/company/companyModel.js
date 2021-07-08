let mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    firstName: { type: String },
    firstName: { type: String },
    email: { type: String, unique: true, index: true, required: true },
    password: { type: String },
    userRole: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const companyModel = new mongoose.model("company", companySchema);
