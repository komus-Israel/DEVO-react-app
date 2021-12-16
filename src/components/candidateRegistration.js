import React from "react"
import { useEffect, useState } from "react"
import { uploadToPinata } from "../functions/functions";
import ImageUploading from 'react-images-uploading';





const CandidateRegistration=()=>{

    

    const [images, setImages] =useState([])
    const [imageFile, setFile] = useState()
    const [ipfsHash, setIPFSHash] = useState('')
    const [candidateName, setCandidateName] = useState('')
    const [candidateAddress, setCandidateAddress] = useState('')
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      setImages(imageList);
    };

   
    return(

        <div className='candidate-registration-form'>
            <div className='candidate-registration-formdiv'>

                <div className="inputs">
                    <input placeholder='candidate address' className='candidate-address' value={candidateAddress} onChange={(e)=>setCandidateAddress(e.target.value)}/>
                    <input placeholder='candidate name' className='candidate-name' value={candidateName} onChange={(e)=>setCandidateName(e.target.value)}/>
                    <div>

                        {
                            (images.length > 0 && candidateName.length > 0 && candidateAddress.length > 0) ? (
                                                                                                <button className="register-candidate-btn" /*onClick={()=>console.log(images[0].file)}*/ onClick={async()=>{
                                                                                                                        const hash = await uploadToPinata(images[0].file)
                                                                                                                        setIPFSHash(hash)
                                                                                                                }}>register
                                                                                                </button>
                                                                                            ) 
                            :

                            <button disabled className="register-candidate-btn">register</button>
                        }
                        
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