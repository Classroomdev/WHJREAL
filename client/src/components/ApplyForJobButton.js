import React from 'react';

function ApplyForJobButton({ jobLink }) {
  return (
    <>
      <a
        class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        target='_blank'
        href={jobLink}
      >
        Apply for this job
      </a>
    </>
  );
}

export default ApplyForJobButton;
