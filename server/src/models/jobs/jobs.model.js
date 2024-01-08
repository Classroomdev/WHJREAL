const Job = require('./jobs.mongo');

const DEFAULT_JOB_ID = 1;

async function getLatestJobId() {
  const latestJobId = await Job.findOne({}).sort('-jobId');
  if (!latestJobId) {
    return DEFAULT_JOB_ID;
  }

  return latestJobId.jobId;
}

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
  const newJobId = (await getLatestJobId()) + 1;
  const newJob = Object.assign(job, {
    jobId: newJobId,
    deleted: false,
    datePosted: new Date(),
  });

  await saveNewJob(newJob);
}

async function updateJobById(jobId, updatedJob) {
  const existingJob = await Job.findOne({ jobId });

  if (existingJob) {
    await Job.findOneAndUpdate(
      {
        jobId,
      },
      updatedJob,
      {
        new: true,
        upsert: true,
      }
    );
  } else {
    console.error('Job does not exist');
  }
}

async function getJobById(jobId) {
  return await Job.findOne({ jobId }, { _id: 0, __v: 0 });
}

async function getAllJobs() {
  return await Job.find({}, { _id: 0, __v: 0 }).sort({ jobId: -1 });
}

module.exports = {
  createNewJob,
  updateJobById,
  getJobById,
  getAllJobs,
};
