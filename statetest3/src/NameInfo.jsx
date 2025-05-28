import { useState } from "react";

function NameInfo({name,setName}) {
    return (
        <>
            <h1>{name}</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </>
    )
}

export default NameInfo;