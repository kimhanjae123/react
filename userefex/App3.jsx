import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function App3(){
    const [inVal,setInVal] = useState('');
    const preVal = useRef('');

    useEffect(()=>{
        preVal.current = inVal;
    },[inVal])
    return (
        <>
            <input type="text" onChange={(e)=>setInVal(e.target.value)}/>
            <h2>Current Value : {inVal}</h2>
            <h2>Previous Value : {preVal.current}</h2>
        </>
    )
}