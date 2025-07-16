import Webcam from "react-webcam";
import React, { useEffect, useState } from "react";
import { Client } from "https://cdn.jsdelivr.net/npm/@gradio/client/dist/index.min.js";

const Challenge = () => {

    const webcamRef = React.useRef(null);
    const [img, setImg] = useState('');
    const [result, setResult] = useState('');
    const [desc_text,setDesc_text]=useState("");    

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc,desc_text);
            setImg(imageSrc)
            predict(imageSrc,desc_text)
        },
        [webcamRef]
    );

    const predict = async (url,desc_text) => {
        const client = await Client.connect("YoussefA7med/English_Helper_Written");
        setResult(
            await client.predict("/predict", {
                image_url: url,
                paragraph: desc_text,
                model: "meta-llama/llama-3.2-11b-vision-instruct:free",
            }));
            console.log(result);
            
    }

    const submitDescription=(e)=>{
        e.preventDefault();
        capture()

    }

    useEffect(() => {
        console.log(result);

    }, [result])

    return (
        <>
           {img?            
           <img src={img} alt="alt" />
           :
           <Webcam
                audio={false}
                height={600}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={600}
            />
        }
            <form onSubmit={submitDescription}>
                <label for="description">Description</label>
                <textarea id="description" onChange={(e)=>setDesc_text(e.target.value)} className="text-black">
                </textarea>
                            <button >Capture photo</button>

            </form>
        </>
    )
}

export default Challenge;