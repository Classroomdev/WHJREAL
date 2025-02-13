import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import JobCard from "../../components/JobCard";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

function JobsIndex() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://whjreal-backend.onrender.com"
      : "http://localhost:8080";

  const getAllJobs = async () => {
    const response = await fetch(`${API_URL}/api/jobs/all?page=${page}`);
    const jobs = await response.json();
    setJobs(jobs);
  };

  useEffect(() => {
    getAllJobs();
    searchParams.set("page", page);
    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [page, navigate, location.search]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePrevClick = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNextClick = () => {
    handlePageChange(page + 1);
  };

  return (
    <>
      <div class="bg-hero py-10">
        <h1 class="text-5xl font-extrabold tracking-tight text-center">Jobs</h1>
        <p class="mt-2 text-center text-xl text-gray-700 dark:text-gray-300/75">
          Apply for one of jobs below. Good luck.
        </p>
        <Pagination
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
          marginTop={"40px"}
          page={page}
        />
        <div class="mx-auto w-4/5 py-16 flex flex-wrap justify-between">
          {jobs.map((job) => (
            <JobCard
              job={job}
              numberOfTitleCharacters={40}
              numberOfDescriptionCharacters={400}
              width={"49%"}
            />
          ))}
        </div>
        <Pagination
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
          marginBottom={"40px"}
          page={page}
        />
      </div>
      <Footer />
    </>
  );
}

export default JobsIndex;
