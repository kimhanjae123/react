import { useState } from "react"

export default function App2(){
    const [inVal,setInVal] = useState('');
    const [preVal,setPreVal] = useState('');
    const inChange = (e) =>{
        setPreVal(inVal);
        setInVal(e.target.value);
    }
    return (
        <>
            <input type="text" onChange={inChange}/>
            <h2>Current Value : {inVal}</h2>
            <h2>Previous Value : {preVal}</h2>
        </>
    )
}