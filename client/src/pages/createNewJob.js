import React, { useState } from 'react';
import { httpCreateNewJob } from '../hooks/requests';
import { useNavigate } from 'react-router-dom';

const CreateNewJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    jobDescription: '',
    jobType: '',
    jobLocation: '',
    jobApplicationLink: '',
  });

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
    await httpCreateNewJob({
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

    navigate('/');
  };

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

export default CreateNewJob;
