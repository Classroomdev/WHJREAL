const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
  jobId: {
    type: Number,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  jobContact: {
    type: String,
    required: true,
  },
  jobApplicationLink: {
    type: String,
    required: true,
  },
  deleted: {
    type: Boolean,
    required: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Job", jobsSchema);
