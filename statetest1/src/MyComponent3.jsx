import { useState } from "react";
import MyComponent from './../../myreact/src/MyComponent';
function MyComponent3() {
    const [person, setPerson] = useState({ name: "hong", age: 20,subject:"computer" })

    const changeInput = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h1>HHello React State</h1>
            <span>{person.name}</span><input type="text" name="name" onChange={changeInput} /><br />
            <span>{person.age}</span><input type="text" name="age" onChange={changeInput} />
            <span>{person.subject}</span><input type="text" name="subject" onChange={changeInput} />
        </>
    )
}
export default MyComponent3;