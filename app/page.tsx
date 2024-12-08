// app/page.tsx

'use client'; // Mark this component as a client component

import React, { useEffect, useState } from 'react';

const words = ['Work', 'Life', 'Days']; // Array of words to cycle through

const HomePage: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    const typingSpeed = 100; // Speed of typing (1 second)
    const deletingSpeed = 100; // Speed of deleting (1 second)
    const pauseTime = 3000; // Pause time after typing each word (5 seconds)

    useEffect(() => {
        const handleTyping = () => {
            if (isDeleting) {
                setText((prev) => prev.slice(0, prev.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                setText((prev) => words[index].slice(0, prev.length + 1));
                if (text === words[index]) {
                    // Pause for 5 seconds after completing the word
                    setTimeout(() => {
                        setIsDeleting(true); // Start deleting after the pause
                    }, pauseTime);
                    return; // Exit to avoid setting a new timeout for typing
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 tracking-tight text-center font-sans">
                Welcome to Remote <span className="text-blue-500">{text}</span>
                <span className="cursor"></span> {/* Horizontal blinking cursor */}
            </h1>
            <style jsx>{`
                .cursor {
                    display: inline-block;
                    width: 10px; /* Width of the cursor */
                    height: 30px; /* Height of the cursor */
                    background-color: #3b82f6; /* Cursor color */
                    margin-left: 8px; /* Space between text and cursor */
                    animation: blink 1s step-end infinite; /* Blinking effect */
                }

                @keyframes blink {
                    50% {
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;