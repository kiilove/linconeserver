const mongoose = require("mongoose");

const CompSchema = new mongoose.Schema(
  {
    compName: {
      type: String,
      required: true,
    },
    clientUserName: {
      type: String,
      require: false,
    },
    telNumber: {
      type: String,
      required: false,
    },
    mobileNumber: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    accoutType: {
      type: Number,
      default: 1,
    },
    memberGroup: {
      type: String,
      default: "G4",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", CompSchema);
