import { useState } from "react"

export default function Counter() {
    const [kor, setKor] = useState(0);
    const [eng, setEng] = useState(0);
    const [math, setMath] = useState(0);
    const [avg, setAvg] = useState(0);

    const calkor = (e) => {
        setKor(e.target.value);
        setAvg((+e.target.value + (+eng) + (+math)) / 3);
    }
    const calEng = (e) => {
        setEng(e.target.value);
        setAvg((+kor + (+e.target.value) + (+math)) / 3);
    }
    const calMath = (e) => {
        setMath(e.target.value);
        setAvg((+kor + (+eng) + (+e.target.value)) / 3);
    }

    return (
        <>
            국어:<input type="text" onChange={calkor}/><br />
            영어:<input type="text" onChange={calEng}/><br />
            수학:<input type="text" onChange={calMath}/><br />
            <p>평균 : {avg}</p>
        </>
    )
}