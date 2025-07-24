import React, { useState, useEffect } from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import { Mic, MicOff, Play, Pause, RotateCcw, BookOpen, Volume2, Loader2 } from 'lucide-react';

const Reading = () => {
    const [practiceText, setPracticeText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Simulate fetching text from API
    const fetchPracticeText = async () => {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        const sampleTexts = [
            "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the English alphabet and is commonly used for typing practice and font testing.",
            "Reading aloud improves pronunciation, fluency, and comprehension. Practice with clear articulation and natural rhythm to enhance your speaking skills.",
            "Technology has revolutionized the way we communicate, learn, and work. From artificial intelligence to renewable energy, innovation continues to shape our future.",
            "The art of storytelling has been passed down through generations, preserving culture and wisdom while entertaining audiences across the world."
        ];
        setPracticeText(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
        setIsLoading(false);
        setFeedback(null);
    };

    const predict = async (blobUrl, blob) => {
        console.log("Predicting with audio blob:", blob);
        if (!blob) {
            console.error("No audio blob available for prediction.");
            return;
        }
        
        setIsLoading(true);
        try {
            // Your existing API call code would go here
            // const client = await Client.connect("YoussefA7med/English_Helper_Spoken");
            // const result = await client.predict("/predict", {
            //     image_url: "Hello!!",
            //     audio_file: blob,
            //     model: "meta-llama/llama-3.2-11b-vision-instruct:free",
            // });
            
            // Simulate API response
            await new Promise(resolve => setTimeout(resolve, 2000));
            const mockFeedback = {
                score: Math.floor(Math.random() * 20) + 80,
                feedback: "Great pronunciation! Focus on clearer consonants and maintain steady pace.",
                improvements: ["Work on 'th' sounds", "Pause at commas", "Emphasize key words"]
            };
            setFeedback(mockFeedback);
        } catch (error) {
            console.error("Prediction failed:", error);
            setFeedback({
                score: 0,
                feedback: "Sorry, there was an error processing your audio. Please try again.",
                improvements: []
            });
        } finally {
            setIsLoading(false);
        }
    };

    const { status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } =
        useReactMediaRecorder({
            audio: true,
            onStop: predict,
        });

    const playAudio = () => {
        if (mediaBlobUrl) {
            const audio = new Audio(mediaBlobUrl);
            audio.play();
            setIsPlaying(true);
            audio.onended = () => setIsPlaying(false);
        }
    };

    useEffect(() => {
        fetchPracticeText();
    }, []);

    const getStatusColor = () => {
        switch (status) {
            case 'recording': return 'text-red-500';
            case 'stopped': return 'text-green-500';
            default: return 'text-gray-500';
        }
    };

    const getScoreColor = (score) => {
        if (score >= 90) return 'text-green-500';
        if (score >= 75) return 'text-blue-500';
        if (score >= 60) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Reading Practice
                        </h1>
                    </div>
                    <p className="text-gray-600 text-lg">Improve your pronunciation with AI-powered feedback</p>
                </div>

                {/* Practice Text Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                            <Volume2 className="w-6 h-6 text-indigo-500" />
                            Practice Text
                        </h2>
                        <button
                            onClick={fetchPracticeText}
                            disabled={isLoading}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50"
                        >
                            <RotateCcw className="w-4 h-4" />
                            New Text
                        </button>
                    </div>
                    
                    {isLoading && !practiceText ? (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                        </div>
                    ) : (
                        <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-500">
                            <p className="text-lg leading-relaxed text-gray-800 font-medium">
                                {practiceText}
                            </p>
                        </div>
                    )}
                </div>

                {/* Recording Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                        <Mic className="w-6 h-6 text-red-500" />
                        Record Your Reading
                    </h2>
                    
                    <div className="text-center">
                        <div className="mb-6">
                            <span className={`text-lg font-medium ${getStatusColor()}`}>
                                Status: {status.charAt(0).toUpperCase() + status.slice(1)}
                            </span>
                        </div>

                        <div className="flex justify-center gap-4 mb-6">
                            <button
                                onClick={startRecording}
                                disabled={status === 'recording' || isLoading}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full hover:from-red-600 hover:to-pink-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                            >
                                <Mic className="w-5 h-5" />
                                Start Recording
                            </button>
                            
                            <button
                                onClick={stopRecording}
                                disabled={status !== 'recording'}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                            >
                                <MicOff className="w-5 h-5" />
                                Stop Recording
                            </button>
                        </div>

                        {mediaBlobUrl && (
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-lg font-medium text-gray-700 mb-4">Your Recording</h3>
                                <div className="flex items-center justify-center gap-4">
                                    <button
                                        onClick={playAudio}
                                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                                    >
                                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                        {isPlaying ? 'Playing' : 'Play'}
                                    </button>
                                    <audio src={mediaBlobUrl} controls className="rounded-lg" />
                                    <button
                                        onClick={clearBlobUrl}
                                        className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Feedback Section */}
                {(feedback || isLoading) && (
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI Feedback</h2>
                        
                        {isLoading ? (
                            <div className="flex items-center justify-center py-8">
                                <div className="text-center">
                                    <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mx-auto mb-4" />
                                    <p className="text-gray-600">Analyzing your pronunciation...</p>
                                </div>
                            </div>
                        ) : feedback && (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className={`text-6xl font-bold ${getScoreColor(feedback.score)} mb-2`}>
                                        {feedback.score}%
                                    </div>
                                    <p className="text-gray-600">Overall Score</p>
                                </div>
                                
                                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                                    <h3 className="font-semibold text-blue-800 mb-2">Feedback</h3>
                                    <p className="text-blue-700">{feedback.feedback}</p>
                                </div>
                                
                                {feedback.improvements && feedback.improvements.length > 0 && (
                                    <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
                                        <h3 className="font-semibold text-yellow-800 mb-3">Areas for Improvement</h3>
                                        <ul className="space-y-2">
                                            {feedback.improvements.map((improvement, index) => (
                                                <li key={index} className="text-yellow-700 flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                                    {improvement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reading;
// import { ReactMediaRecorder } from "react-media-recorder";
// import { Client } from "https://cdn.jsdelivr.net/npm/@gradio/client/dist/index.min.js";
// import { useReactMediaRecorder } from "react-media-recorder";

// const Reading = () => {
//     const predict = async (blobUrl, blob) => {
//         console.log("Predicting with audio blob:", blob);
//         if (!blob) {
//             console.error("No audio blob available for prediction.");
//             return;
//         }
//         const client = await Client.connect("YoussefA7med/English_Helper_Spoken");
//         const result = await client.predict("/predict", {
//             image_url: "Hello!!",
//             audio_file: blob,
//             model: "meta-llama/llama-3.2-11b-vision-instruct:free",
//         });
//         console.log("Prediction Result:", result);
//     };

//     const { status, startRecording, stopRecording, mediaBlobUrl } =
//         useReactMediaRecorder({
//             audio: true,
//             onStop: predict,
//         });


//     return (
//         <div>
//             <p>{status}</p>
//             <button onClick={startRecording} className="bg-danger btn border-0 rounded-pill">Start Recording</button>
//             <button onClick={stopRecording} className="bg-danger btn border-0 rounded-pill">Stop Recording</button>
//             <audio src={mediaBlobUrl} controls />
//         </div>
//     )
// }

// export default Reading;