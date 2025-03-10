import { useEffect } from "react";
import { httpGetAllJobs } from "./apis/requests";
import "./App.css";

function App() {
  const getAllJobs = async () => {
    const jobs = await httpGetAllJobs();
    console.log(jobs);
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <>
      <p>Yes</p>
    </>
  );
}

export default App;
