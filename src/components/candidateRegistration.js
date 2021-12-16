import React from "react"
import { useEffect, useState } from "react"
import { uploadToPinata } from "../functions/functions";
import ImageUploading from 'react-images-uploading';
require("dotenv").config()




const CandidateRegistration=()=>{

    

    const [images, setImages] =useState([])
    const [imageFile, setFile] = useState()
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      setImages(imageList);
    };

    useEffect(()=>{
        const key = process.env.REACT_APP_API_SECRET


        console.log(key)
    })
     
    return(

        <div className='candidate-registration-form'>
            <div className='candidate-registration-formdiv'>

                <div className="inputs">
                    <input placeholder='candidate address' className='candidate-address'/>
                    <input placeholder='candidate name' className='candidate-name'/>
                    <div>
                        <button className="register-candidate-btn" /*onClick={()=>console.log(images[0].file)}*/ onClick={()=>uploadToPinata(images[0].file)}>register</button>
                    </div>
                </div>

                <div className="image-upload">                        
                        <ImageUploading

                       
                                value={images}
                                onChange={onChange}
                                maxNumber={1}
                                dataURLKey="data_url"
                                >
                                {({
                                    imageList,
                                    onImageUpload,
                                    onImageUpdate,
                                   
                                }) => (
                                    // write your building UI
                                    <div className="frame" onClick={onImageUpdate}>

                                        {
                                            imageList.length > 0 ? <img src={imageList[0].data_url} alt="" /> : <p>candidate image</p>
                                           
                                            
                                        }
 
                                    </div>
                                )}
                                </ImageUploading>  
                    
                    
                </div>
                
                
            </div>

            
        </div>
        
    )
}

export default CandidateRegistration