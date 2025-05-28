import { useState } from "react";
function MyComponent2() {
    const [name, setName] = useState("hong")
    const [age, setAge] = useState(20);
    return (
        <>
            <h1>HHello React State</h1>
            <span>{name}</span><input type="text" onChange={(e)=>setName(e.target.value)}/><br />
            <span>{age}</span><input type="text" onChange={(e)=>setAge(e.target.value)}/><br />
        </>
    )
}

export default MyComponent2;