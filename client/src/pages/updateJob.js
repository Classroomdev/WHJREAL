import React, { useState, useEffect } from 'react';
import { httpUpdateJob, httpGetJobById } from '../hooks/requests';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    jobDescription: '',
    jobType: 'internship',
    jobLocation: 'remote',
    jobApplicationLink: '',
  });

  useEffect(() => {
    const getJob = async () => {
      const fetchedJob = await httpGetJobById(id);
      setJob(fetchedJob);
      setFormData({
        companyName: fetchedJob.companyName,
        jobTitle: fetchedJob.jobTitle,
        jobDescription: fetchedJob.jobDescription,
        jobType: fetchedJob.jobType,
        jobLocation: fetchedJob.jobLocation,
        jobApplicationLink: fetchedJob.jobApplicationLink,
      });
    };
    getJob();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitNewJob = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const companyName = data.get('companyName');
    const jobTitle = data.get('jobTitle');
    const jobDescription = data.get('jobDescription');
    const jobType = data.get('jobType');
    const jobLocation = data.get('jobLocation');
    const jobApplicationLink = data.get('jobApplicationLink');
    await httpUpdateJob(id, {
      companyName,
      jobTitle,
      jobDescription,
      jobType,
      jobLocation,
      jobApplicationLink,
    });

    console.log('Form submitted:', formData);
    // Reset the form after submission if needed
    setFormData({
      companyName: '',
      jobTitle: '',
      jobDescription: '',
      jobLocation: 'remote',
      jobApplicationLink: '',
      jobType: 'internship',
    });
  };

  if (!job) {
    return <p>Loading!</p>;
  }

  return (
    <form onSubmit={submitNewJob}>
      <label>
        Company Name:
        <input
          type='text'
          name='companyName'
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Job Title:
        <input
          type='text'
          name='jobTitle'
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Job Description:
        <textarea
          name='jobDescription'
          value={formData.jobDescription}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Link To Job Application:
        <input
          type='url'
          name='jobApplicationLink'
          value={formData.jobApplicationLink}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Job Type:
        <select
          name='jobType'
          value={formData.jobType}
          onChange={handleChange}
          required
        >
          <option value='internship'>Internship</option>
          <option value='junior'>Junior</option>
          <option value='intermediate'>Intermediate</option>
        </select>
      </label>

      <label>
        Job Location:
        <select
          name='jobLocation'
          value={formData.jobLocation}
          onChange={handleChange}
          required
        >
          <option value='remote'>Remote</option>
          <option value='hybrid'>Hybrid</option>
          <option value='on-site'>On site</option>
        </select>
      </label>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default UpdateJob;
