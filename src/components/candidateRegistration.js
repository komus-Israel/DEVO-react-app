import React from "react"
import { useEffect, useState } from "react"
import { handleImageSelection, getBase64 } from "../functions/functions";
import ImageUploading from 'react-images-uploading';



const CandidateRegistration=()=>{

    

    const [images, setImages] = React.useState([]);
    const maxNumber = 1;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      setImages(imageList);
    };
     
    return(

        <div className='candidate-registration-form'>
            <div className='candidate-registration-formdiv'>

                <div className="inputs">
                    <input placeholder='candidate address' className='candidate-address'/>
                    <input placeholder='candidate name' className='candidate-name'/>
                    <div>
                        <button className="register-candidate-btn">register</button>
                    </div>
                </div>

                <div className="image-upload">                        
                        <ImageUploading

                       
                                value={images}
                                onChange={onChange}
                                maxNumber={maxNumber}
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
                                            imageList.length > 0 && <img src={imageList[0].data_url} alt="" width="100" />
                                            
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