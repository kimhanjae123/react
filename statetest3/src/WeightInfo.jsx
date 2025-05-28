import { useState } from "react";

function WeightInfo({weight,setWeight}){
    // const[sweight,setSweight] = useState(weight)
    return(
        <>
        <h1>{weight}</h1>
        <input type="text"onChange={(e)=>setWeight(e.target.value)}/>
        </>
    )

}

export default WeightInfo;