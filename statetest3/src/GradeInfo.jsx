import { useState } from "react";

function GradeInfo({grade,setGrade}){
    // const [sgrade,setSgrade] = useState(grade);
    return(<>
        <h1>{grade}</h1>
        <input type="text"onChange={(e)=>setGrade(e.target.value)}/>
    </>)
}

export default GradeInfo;