import React, { useState } from 'react';
import { httpCreateNewJob } from '../../hooks/requests';
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
      jobLocation: 'Remote',
      jobApplicationLink: '',
      jobType: 'internship',
    });

    navigate('/');
  };

  return (
    <div class='py-12 bg-hero'>
      <form
        onSubmit={submitNewJob}
        class='w-3/5 mx-auto '
      >
        <div class='pb-12'>
          <h2 class='text-3xl font-semibold leading-7 text-gray-900'>
            Post a Job.
          </h2>
          <p class='mt-1 text-sm leading-6 text-gray-600'>
            Please fill this information as accurately as you can.
          </p>
        </div>
        <div class='sm:col-span-4'>
          <label
            for=''
            class='block text-m font-medium leading-6 text-gray-900'
          >
            Company Name
          </label>
          <div class='mt-2'>
            <input
              type='text'
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
              required
              class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
          <p class='mt-1 text-sm leading-6 text-gray-600'>
            FIll in the company name.
          </p>
        </div>
        <div class='sm:col-span-4 mt-10'>
          <label
            for='email'
            class='block text-m font-medium leading-6 text-gray-900'
          >
            Job Title
          </label>
          <div class='mt-2'>
            <input
              type='text'
              name='jobTitle'
              value={formData.jobTitle}
              onChange={handleChange}
              required
              class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
          <p class='mt-1 text-sm leading-6 text-gray-600'>
            Which position are you advertising for?
          </p>
        </div>
        <div class='col-span-full mt-10'>
          <label
            for='about'
            class='block text-m font-medium leading-6 text-gray-900'
          >
            Job Description
          </label>
          <div class='mt-2'>
            <textarea
              name='jobDescription'
              value={formData.jobDescription}
              onChange={handleChange}
              required
              rows='3'
              class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            ></textarea>
          </div>
          <p class='mt-3 text-sm leading-6 text-gray-600'>
            Which skills are you looking for?
          </p>
        </div>
        <div class='sm:col-span-4 mt-10'>
          <label
            for='email'
            class='block text-m font-medium leading-6 text-gray-900'
          >
            Link to Job Application
          </label>
          <div class='mt-2'>
            <input
              type='url'
              name='jobApplicationLink'
              value={formData.jobApplicationLink}
              onChange={handleChange}
              required
              class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
          <p class='mt-1 text-sm leading-6 text-gray-600'>
            Which position are you advertising for?
          </p>
        </div>
        <div class='mt-10'>
          <label
            for='jobTyoe'
            class='block mb-2 text-m font-medium text-gray-900 dark:text-white'
          >
            Job Type
          </label>
          <select
            name='jobType'
            value={formData.jobType}
            onChange={handleChange}
            required
            class='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='internship'>Internship</option>
            <option value='junior'>Junior</option>
            <option value='intermediate'>Intermediate</option>
          </select>
          <p class='mt-1 text-sm leading-6 text-gray-600'>
            Which skill level are you looking for?
          </p>
        </div>
        <div class='mt-10'>
          <label
            for='jobTyoe'
            class='block mb-2 text-m font-medium text-gray-900 dark:text-white'
          >
            Job Location
          </label>
          <select
            name='jobLocation'
            value={formData.jobLocation}
            onChange={handleChange}
            required
            class='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='remote'>Remote</option>
            <option value='hybrid'>Hybrid</option>
            <option value='on-site'>On-site</option>
          </select>
          <p class='mt-1 text-sm leading-6 text-gray-600'>
            Where is the job located?
          </p>
        </div>
        <button
          type='submit'
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateNewJob;
