// app/confirmation.tsx

import Link from "next/link";

const ConfirmationPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-300">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Application Submitted!</h2>
                <p className="text-gray-700 mb-6">Thank you for applying. We will review your application and get back to you shortly.</p>
                <div>
                    <Link href="/" className="text-blue-600 hover:underline">Return to Home</Link>
                </div>
            </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3379491505434257"
     crossOrigin="anonymous"></script>
        </div>
    );
};

export default ConfirmationPage;