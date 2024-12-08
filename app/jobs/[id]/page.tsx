// app/jobs/[id]/page.tsx

'use client'; // Mark this component as a client component

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Script from 'next/script'; // Import next/script for loading external scripts
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitizing HTML

// Define the Job type
interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string; // This will contain HTML formatted text
    logo_url: string; // Add this line to include the company logo URL
}

// Job Details component
const JobDetailsPage = () => {
    const params = useParams<{ id: string }>(); // Get the job ID from URL parameters
    const jobId = params.id; // Extract job ID
    const router = useRouter(); // Initialize router for navigation

    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch job details based on ID
    useEffect(() => {
        const fetchJobDetails = async () => {
            if (!jobId) return; // Ensure jobId is available before fetching

            try {
                const res = await fetch(`http://localhost:5000/api/jobs/${jobId}`); // Use your Node.js API URL
                if (!res.ok) {
                    throw new Error('Failed to fetch job details');
                }
                const data: Job = await res.json();
                setJob(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchJobDetails();
    }, [jobId]); // Dependency on jobId

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior
        router.push('/confirmation'); // Redirect to confirmation page
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-400 flex items-center justify-center p-4">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6 md:p-8">
                {loading ? (
                    <p className="text-center text-gray-700">Loading job details...</p>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : job ? (
                    <>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-black flex items-center justify-center">
                            {job.logo_url && (
                                <img 
                                    src={job.logo_url} 
                                    alt={`${job.company} Logo`} 
                                    className="h-10 w-auto mr-2"  // Adjust size as needed
                                />
                            )}
                            {job.title}
                        </h2>
                        <p className="text-lg md:text-xl text-black mb-2 text-center">{job.company}</p>
                        <p className="text-sm text-black mb-4 text-center">{job.location}</p>

                        {/* Render sanitized HTML Description with black text */}
                        <div 
                            className="mb-6 text-black" 
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.description) }} 
                        />

                        <h3 className="text-xl font-bold mb-4 text-black">Apply for this Job</h3>
                        <form onSubmit={handleSubmit} className="mb-6">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-black">Full Name</label>
                                <input type="text" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring focus:ring-pink-400 transition duration-200 text-black"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                                <input type="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring focus:ring-pink-400 transition duration-200 text-black"/>
                            </div>
                            {/* New University Field */}
                            <div className="mb-4">
                                <label htmlFor="university" className="block text-sm font-medium text-black">City</label>
                                <input type="text" id="university" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring focus:ring-pink-400 transition duration-200 text-black"/>
                            </div>
                            <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition duration-200 shadow-md hover:shadow-lg">Submit Application</button>
                        </form>

                        {/* Google Ad Slot Below Content */}
                        <div className="my-6">
                            <ins className="adsbygoogle"
                                 style={{ display: 'block', width: '100%', height: '250px' }} // Set appropriate dimensions
                                 data-ad-client="ca-pub-3379491505434257"  // Replace with your actual client ID
                                 data-ad-slot="6939209830"  // Replace with your actual ad slot ID
                                 data-ad-format="auto"
                                 data-full-width-responsive="true"></ins>
                            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3379491505434257" crossOrigin="anonymous"></Script>
                            <Script id="adsbygoogle-init" strategy="afterInteractive">
                                {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                            </Script>
                        </div>

                    </>
                ) : (
                    <p>Job not found.</p>
                )}
            </div>
        </div>
    );
};

export default JobDetailsPage;