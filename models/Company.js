const mongoose = require("mongoose");
const opts = {
  toJSON: {
    virtuals: true,
  },
};
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
    clientEmail: {
      type: String,
      required: false,
    },
    clientType: {
      type: Number,
      default: 1,
    },
    memberGroup: {
      type: String,
      default: "G4",
    },
  },
  { timestamps: true },
  opts
);

module.exports = mongoose.model("Company", CompSchema);
