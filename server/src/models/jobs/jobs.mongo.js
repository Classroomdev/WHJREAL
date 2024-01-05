const mongoose = require('mongoose');

const jobsSchema = new mongoose.Schema({
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
    // Is it an internship etc
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  linkToJobApplication: {
    type: String,
    required: true,
  },
});
