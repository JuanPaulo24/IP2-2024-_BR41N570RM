import { useState, useEffect } from "react";
import axios from "axios";

export const useJobManager = () => {
    const [jobs, setJobs] = useState([]);
    const [editingJob, setEditingJob] = useState(null);

    // Get all jobs
    const refetchJobs = async () => {
        try {
            const response = await axios.get('/api/jobs');
            setJobs(response.data.jobs);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    // Initial fetch
    useEffect(() => {
        refetchJobs();
    }, []);

    // Delete job
    const deleteJob = async (jobId) => {
        try {
            await axios.delete(`/api/jobs/${jobId}`);
            await refetchJobs();  // Refresh list after delete
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

    // Update job
    const editJob = async (updatedJob) => {
        try {
            await axios.put(`/api/jobs/${updatedJob.id}`, updatedJob);
            await refetchJobs();  // Refresh list after edit
            setEditingJob(null);
        } catch (error) {
            console.error("Error updating job:", error);
        }
    };

    // Create job
    const addJob = async (newJob) => {
        try {
            await axios.post("/api/jobs", newJob);
            await refetchJobs();  // Refresh list after add
        } catch (error) {
            console.error("Error adding job:", error);
        }
    };

    return {
        jobs,
        deleteJob,
        editJob,
        addJob,
        editingJob,
        setEditingJob
    };
};
