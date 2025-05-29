import { useEffect } from "react"
import { useState } from "react"

export default function Timer(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setCount(count+1);
            return ()=>clearTimeout(timer);
        },1000)
    });

    return(
        <>
            <h1>I've rendered {count}</h1>
        </>
    )
}