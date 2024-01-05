const Job = require('./jobs.mongo');

async function saveNewJob(newJob) {
  await Job.findOneAndUpdate(
    {
      jobId: newJob.jobId,
    },
    newJob,
    {
      upsert: true,
    }
  );
}

async function createNewJob(job) {
  const newJob = Object.assign(job, {
    deleted: false,
    datePosted: new Date(),
  });

  await saveNewJob(newJob);
}

module.exports = {
  createNewJob,
};
