// app/jobs/[id]/page.tsx

'use client'; // Mark this component as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script'; // Import next/script for loading external scripts

// Define the Job type
interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string; // This will contain HTML formatted text
    logo_url: string; // Company logo URL
}

// Job Details component
const JobDetailsPage = () => {
    const router = useRouter(); // Initialize router for navigation

    // Hardcoded job details for a Java Backend Developer position
    const job: Job = {
        id: 1,
        title: "Java Backend Developer",
        company: "Tech Innovations Inc.",
        location: "Remote",
        description: `
            <h3><strong>Job Overview</strong></h3>
            <p>We are seeking a skilled Java Backend Developer to join our dynamic team at Tech Innovations Inc. The ideal candidate will have experience in building scalable and high-performance applications.</p>
            <h3><strong>Key Responsibilities</strong></h3>
            <ul>
                <li>Develop and maintain backend services using Java.</li>
                <li>Collaborate with front-end developers to integrate user-facing elements.</li>
                <li>Optimize applications for maximum speed and scalability.</li>
                <li>Participate in code reviews and maintain code quality standards.</li>
            </ul>
            <h3><strong>Qualifications</strong></h3>
            <ul>
                <li>Proven experience as a Java Backend Developer or similar role.</li>
                <li>Strong understanding of Java frameworks (Spring, Hibernate).</li>
                <li>Experience with RESTful APIs and microservices architecture.</li>
                <li>Familiarity with database technologies (SQL, NoSQL).</li>
                <li>Excellent problem-solving skills and ability to work independently.</li>
            </ul>
            <h3><strong>Benefits</strong></h3>
            <ul>
                <li>Competitive salary and performance bonuses.</li>
                <li>Flexible working hours and remote work options.</li>
                <li>Health insurance and wellness programs.</li>
                <li>Opportunities for professional development and growth.</li>
            </ul>
            <h3><strong>How to Apply</strong></h3>
            <p>If you are passionate about backend development and meet the qualifications listed above, we encourage you to apply!</p>
        `,
        logo_url: "https://example.com/logo.png" // Replace with actual logo URL
    };

    const [loading] = useState(false);
    const [error] = useState<string | null>(null);

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
                ) : (
                    <>
                        {/* Ad placement at the top */}
                        <div className="my-4">
                            <ins className="adsbygoogle"
                                 style={{ display: 'block', width: '100%', height: '250px' }} // Set appropriate dimensions
                                 data-ad-client="ca-pub-3379491505434257"  // Replace with your actual client ID
                                 data-ad-slot="6939209830"  // Replace with your actual ad slot ID
                                 data-ad-format="auto"
                                 data-full-width-responsive="true"></ins>
                            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3379491505434257" crossOrigin="anonymous"></Script>
                        </div>

                        {/* Job Title and Company */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-black flex items-center justify-center">
                            {job.title}
                        </h2>
                        <p className="text-lg md:text-xl text-black mb-2 text-center">{job.company}</p>
                        <p className="text-sm text-black mb-4 text-center">{job.location}</p>

                        {/* Job Description */}
                        <div className="text-black mb-2" dangerouslySetInnerHTML={{ __html: job.description }} />

                        {/* Ad placement within content */}
                        <div className="my-6">
                            <ins className="adsbygoogle"
                                 style={{ display: 'block', width: '100%', height: '250px' }} // Set appropriate dimensions
                                 data-ad-client="ca-pub-3379491505434257"  // Replace with your actual client ID
                                 data-ad-slot="6939209830"  // Replace with your actual ad slot ID
                                 data-ad-format="auto"
                                 data-full-width-responsive="true"></ins>
                            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3379491505434257" crossOrigin="anonymous"></Script>
                        </div>

                        {/* Apply Section */}
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

                            {/* City Field */}
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-sm font-medium text-black">City</label>
                                <input type="text" id="city" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring focus:ring-pink-400 transition duration-200 text-black"/>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition duration-200 shadow-md hover:shadow-lg">Submit Application</button>
                        </form>

                        {/* Google Ad Slot Below Content */}
                        {/* Optional sticky ad can be added here if needed */}

                    </>
                )}
            </div>

            {/* Additional Google Ad Slot at the bottom (optional) */}
            {/* Uncomment if you want another ad at the bottom of the page */}
            {/* 
            <div className="my-6 fixed bottom-0 left-0 right-0">
                <ins className="adsbygoogle"
                     style={{ display: 'block', width: '100%', height: '250px' }} 
                     data-ad-client="ca-pub-3379491505434257"
                     data-ad-slot="6939209830"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <Script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script> 
            </div> 
            */}
        </div>
    );
};

export default JobDetailsPage;