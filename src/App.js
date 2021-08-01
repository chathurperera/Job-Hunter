import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jobInfo from './data';
import JobsDisplay from './JobsDisplay';
import JobType from './JobType';

const allTypes = ['All',...new Set(jobInfo.map((job) => job.type))];

function App() {
  const [jobs,setJobs] = useState(jobInfo);
const [types,setTypes] = useState(allTypes);

const filterJobs = (type) => {
    if(type === 'All'){
      setJobs(jobInfo);
      return;
    }
    const filteredJobs = jobInfo.filter((job) => job.type === type);
    setJobs(filteredJobs);
};

  return (
    <>
        <header>
        <h1 className="header__title">Your Job Search Ends Here</h1>
        <div className="header__cta">
          <h2>Subscribe to our newsletter to receive latest Job openings</h2>
            <form >
            <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
              <button type="submit" className='btn btn-primary'>Subscribe</button>
            </form>
        </div>
        </header>
      <main>
        <div className="display__section">
          <JobType types={types}  filterJobs={filterJobs} />
          <JobsDisplay joboffers={jobs}  />
        </div>
      </main>
      
    </>
  );
}

export default App;
