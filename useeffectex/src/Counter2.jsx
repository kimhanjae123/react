import { useEffect } from "react";
import { useState } from "react"

export default function Counter2() {
    const [kor, setKor] = useState(0);
    const [eng, setEng] = useState(0);
    const [math, setMath] = useState(0);
    const [avg, setAvg] = useState(0);
    const [count,setCount] = useState(0);
    const [calculation,setCalculation] = useState(0);

    useEffect(()=>{
        setAvg((+kor + +eng + +math)/3);
    },[kor,eng,math])

    useEffect(()=>{
        setCalculation(count*2);
    },[count])

    return (
        <>
            국어:<input type="text" onChange={(e)=>setKor(e.target.value)}/><br />
            영어:<input type="text" onChange={(e)=>setEng(e.target.value)}/><br />
            수학:<input type="text" onChange={(e)=>setMath(e.target.value)}/><br />
            <p>평균 : {avg}</p>
            <br/>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <p>Calculation:{calculation}</p>
        </>
    )
}