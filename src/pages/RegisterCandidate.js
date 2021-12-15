import { useEffect } from "react";
import { useSelector } from "react-redux";



const RegisterCandidate=(state)=>{

    const isInstalled = useSelector(
        state => state.hasWalletReducer
    )


    useEffect(()=>{
        console.log(isInstalled)
    })

    return (
        <div className="homepage-container">
            <p>Register candidate</p>
        </div>
    )
}



export default RegisterCandidate