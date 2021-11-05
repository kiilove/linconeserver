const router = require("express").Router();
const Company = require("../models/Company");
const axios = require("axios");

//REGISTER
router.post("/register", async (req, res) => {
  const newCompany = new Company({
    compName: req.body.compName,
    clientUserName: req.body.clientUserName,
    telNumber: req.body.telNumber,
    mobileNumber: req.body.mobileNumber,
    clientEmail: req.body.clientEmail,
    clientType: req.body.clientType,
  });
  try {
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL
router.get("/", async (req, res) => {
  try {
    const clients = await Company.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
