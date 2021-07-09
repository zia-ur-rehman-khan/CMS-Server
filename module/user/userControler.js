const usermodel = require("./userModel");

module.exports.signpWithDetailes = (req, res) => {
  // console.log(req.body, "here is user detailes");
  // res.send({ status: true });
  usermodel
    .createNewUser(req.body)
    .then((user) => {
      console.log(user, "created new user");
      res.send({ status: true, user: user });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: false });
    });
  // console.log(req.body);
};

module.exports.signinwithDetailes = (req, res) => {
  let userdetailes = req.body;
  console.log(userdetailes);

  usermodel
    .getUserByQueiry({
      email: req.body.email,
    })
    .then((user) => {
      if (!user) {
        res.send({
          status: false,
          errMessage: "No user found with matching email ID",
        });
      }
      if (user.password !== userdetailes.password) {
        res.send({
          status: false,
          errMessage: "Invalid Password",
        });
        return;
      }
      res.send({ status: true, found: true, user: user });

    })
    .catch((err) => {
      console.log("Unable to find user ID");
      console.log(err);
      res.send({
        status: false,
        errMessage: err,
        found: false,
      });
    });
};



module.exports.addStudentDetails = (req, res) => {
  console.log(req.body)
  let studentDetaile = {
    $push: {
      studentDetails: req.body
    }
  }

  usermodel
    .addStudentDetailsInDB({ _id: req.body.studentId }, studentDetaile)
    .then((savedDetails) => {
      console.log(savedDetails, 'student detailes add successfully')
      res.send({ status: true, companyDetails: savedDetails });
    })
    .catch((err) => {
      console.log(err, 'unable to add studentDetails in DB');
      res.send({ status: false });
    });
}




module.exports.addCompanyDetails = (req, res) => {
  console.log(req.body)
  let companyDetailes = {
    $push: {
      companyDetails: {
        companyName: req.body.companyName,
        companyDescription: req.body.companyDescription,
      }
    }
  }

  usermodel
    .addCompanyDetailsInDB({ _id: req.body.companyId }, companyDetailes)
    .then((savedDetails) => {
      console.log(savedDetails, 'company detailes add successfully')
      res.send({ status: true, companyDetails: savedDetails });
    })
    .catch((err) => {
      console.log(err, 'unable to add companyDetails in DB');
      res.send({ status: false });
    });
}
