const companyModel = require("./companyModel");

module.exports.addNewJob = (req, res) => {
    companyModel
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
    companyModel
        .getAllJobInDb()
        .then((companyDetails) => {
            console.log(companyDetails, "company details add succesfully");
            res.send({ status: true, companyDetails: companyDetails });
        })
        .catch((err) => {
            console.log(err);
            res.send({ status: false });
        });

};
