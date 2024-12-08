// components/JobPostings.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobPostings = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Top 10 Job Postings</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobPostings;