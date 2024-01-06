const { createNewJob, updateJobById } = require('../../models/jobs/jobs.model');

async function httpAddNewLaunch(req, res) {
  try {
    const newJob = req.body;
    await createNewJob(newJob);
    return res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function httpUpdateJobById(req, res) {
  try {
    const jobId = req.params.id;
    const updatedJob = req.body;
    await updateJobById(jobId, updatedJob);

    return res.status(200).json(updatedJob);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  httpAddNewLaunch,
  httpUpdateJobById,
};
