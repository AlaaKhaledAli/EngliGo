'use client';
import React, { useEffect, useRef, useState } from 'react';
import EnglishChatBotAPI from './ChatBotClass';
import './ChatBot.css';

export default function ChatBot() {
    // Simulate loading/setup time (e.g. connecting to model)
    // setTimeout(() => {
    //   document.getElementById('loader').classList.add('hidden');
    //   startConversation();
    // }, 3000); // 3 seconds loading

    // function speak(text, callback) {
    //   const synth = window.speechSynthesis;
    //   const utterance = new SpeechSynthesisUtterance(text);
    //   utterance.onend = () => callback && callback();
    //   synth.speak(utterance);
    // }

    // function listen(callback) {
    //   const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    //   recognition.lang = 'en-US';
    //   recognition.interimResults = false;
    //   recognition.maxAlternatives = 1;

    //   recognition.onresult = (event) => {
    //     const transcript = event.results[0][0].transcript;
    //     callback(transcript);
    //   };

    //   recognition.onerror = (event) => {
    //     speak("Sorry, I didn't catch that. Try again.", () => listen(callback));
    //   };

    //   recognition.start();
    // }

    // function startConversation() {
    //   speak("Hello! How can I help you today?", () => {
    //     listen((userInput) => {
    //       console.log("User said:", userInput);

    //       // You can replace this with a real AI response
    //       let response = "You said: " + userInput;

    //       speak(response, () => {
    //         startConversation(); // Loop
    //       });
    //     });
    //   });
    // }
    const botRef = useRef(null);
    const [transcript, setTranscript] = useState('');
    const [corrections, setCorrections] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const recordIcon = useRef()

    useEffect(() => {
        // Create bot instance once on mount
        botRef.current = new EnglishChatBotAPI();
    }, []);

    useEffect(() => {
        isRecording ?
            recordIcon.current?.classList.add("record")
            : recordIcon.current?.classList.remove("record")
    }, [isRecording])
    
    const handleRecord = async () => {
        if (isRecording || !botRef.current) return;

        try {
            setIsRecording(true);
            const audioFile = await botRef.current.recordAudio(5);
            setIsRecording(false);
            const response = await botRef.current.sendAudio(audioFile);

            setTranscript(response.transcript);
            setCorrections(response.corrections);
        } catch (error) {
            console.error('❌ Error:', error);
        } finally {
            setIsRecording(false);
        }
    };

    const handleClear = async () => {
        if (!botRef.current) return;

        try {
            const result = await botRef.current.clearChat();
            setTranscript('');
            setCorrections('');
        } catch (err) {
            console.error('❌ Error clearing chat:', err);
        }
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 min-vh-100 d-flex flex-column justify-content-center align-items-center'>
                        <i className="fa-solid fa-microphone record-fs" onClick={handleRecord} ref={recordIcon}></i>
                        <p className='fs-1 justify-content-end'>listen...</p>
                    </div>
                </div>
            </div>

            {/* <div className="liquid-circle">
  <div className="liquid"></div>
</div> */}
{/* 
            <div className="ChatBot-section" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
                <h2>🎓 شات بوت تعليم الإنجليزية</h2>

                <div style={{ margin: '10px 0' }}>
                    <button onClick={handleRecord} disabled={isRecording} style={{ marginRight: '10px' }}>
                        {isRecording ? '⏺️ جاري التسجيل...' : '🎤 تسجيل الصوت'}
                    </button>
                    <button onClick={handleClear}>🧹 مسح المحادثة</button>
                </div>

                <div style={{ background: '#f1f1f1', padding: '10px', borderRadius: '5px' }}>
                    <h4>📋 النص:</h4>
                    <p>{transcript || 'لم يتم إرسال أي رسالة بعد.'}</p>
                </div>

                <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
                    <h4>📚 التصحيحات:</h4>
                    <p>{corrections || 'لا توجد تصحيحات.'}</p>
                </div>
            </div> */}
        </>

    );
}
