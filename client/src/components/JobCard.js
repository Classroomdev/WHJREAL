import React from "react";
import truncateString from "../resources/truncateString";
import { Link } from "react-router-dom";

function JobCard({
  job,
  numberOfTitleCharacters,
  numberOfDescriptionCharacters,
  width,
}) {
  return (
    <Link
      to={`/jobs/index/${job.jobId}`}
      style={{ width: width }}
      class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between mb-4 min-h-70"
    >
      <div class="flex flex-col">
        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="/svg/google-color.svg"
            alt="Avatar of Jonathan Reinink"
          />
          <div class="text-sm">
            <p class="text-gray-900 leading-none">{job.companyName}</p>
            <p class="text-gray-600">Aug 18</p>
          </div>
        </div>
        <div class="my-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg
              class="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            This may be useful for something
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">
            {truncateString(job.jobTitle, numberOfTitleCharacters)}
          </div>
          <p class="text-gray-700 text-base">
            {truncateString(job.jobDescription, numberOfDescriptionCharacters)}
          </p>
        </div>
      </div>
      <div>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{job.jobLocation}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{job.jobType}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Job Contract
        </span>
      </div>
    </Link>
  );
}

export default JobCard;
