import Webcam from "react-webcam";
import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Writing.css";
import { Client } from "https://cdn.jsdelivr.net/npm/@gradio/client/dist/index.min.js";
import ChallengeResultCard from "../../Components/ChallengeResultCard/ChallengeResultCard";

const  Writing = () => {

    const [img, setImg] = useState('');
    const [result, setResult] = useState('');
    const [desc_text, setDesc_text] = useState("");
    const [isFlipped, setIsFlipped] = useState(false);


  const fileInputRef = useRef(null);

    // التعامل مع رفع صورة من الجهاز
    const handleDeviceUpload = () => {
        fileInputRef.current.click();
    };

    // عند اختيار الملف
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImg(imageURL)
            console.log("📸 صورة من الجهاز:", imageURL);
            // يمكنك عرض الصورة أو حفظها في state
        }
    };

    // التعامل مع إدخال URL
    const handleUrlUpload = () => {
        const url = prompt("🔗 أدخل رابط الصورة من الإنترنت:");
        if (url) {
            console.log("🌐 صورة من URL:", url);
            // تحقق من صحة الرابط إذا أردت، ثم اعرضه
        }
    };
    const predict = async (url, desc_text) => {
        const client = await Client.connect("YoussefA7med/English_Helper_Written");
        setResult(
            await client.predict("/predict", {
                image_url: url,
                paragraph: desc_text,
                model: "meta-llama/llama-3.2-11b-vision-instruct:free",
            }));
        console.log(result);

    }

    const submitDescription = (e) => {
        e.preventDefault();
        predict(img, desc_text);
        result && setIsFlipped(true);
    }

    useEffect(() => {
        console.log(result);
    }, [result])

    return (
        <>
            <div className="container justify-content-center ">
                <div className={`row custom-card ${isFlipped ? "flipped" : ""}`}>
                    <div className="col-12   flip front">
                        <div className="row justify-content-center">
                            {img ?
                                <img src={img} alt="alt"  className="res-img"/>
                                :
                                < >
                                    <div className="row justify-content-center">
                                        <div className="col-3">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                                style={{ display: "none" }}
                                            />
                                            <div className="card py-2" style={{ "max-width": "18rem;" }} onClick={handleDeviceUpload}>
                                                <i className="fa-solid fa-arrow-up-from-bracket mx-auto fs-1 color-teal"></i>
                                                <div className="card-body">
                                                    <p className="card-text text-center">Upload from this device.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="card py-2" style={{ "max-width": "18rem;" }} onClick={handleUrlUpload}>
                                                <i className="fa-solid fa-globe mx-auto fs-1 color-teal"></i>
                                                <div className="card-body">
                                                    <p className="card-text text-center">set URL from inetrnet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                            <div className="col-6">
                                <form onSubmit={submitDescription} className="d-flex flex-column gap-2 ">
                                    <textarea className="border-2 rounded-2 text-black" id="description" placeholder="Enter your description" onChange={(e) => setDesc_text(e.target.value)} required>
                                    </textarea>
                                    <button className="btn btn-lg bg-teal text-light border-0 rounded-pill " >See Result</button>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12  flip back">
                        {result && <ChallengeResultCard result={result.data} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Writing;