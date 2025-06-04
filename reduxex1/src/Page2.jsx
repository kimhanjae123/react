import { useDispatch, useSelector } from "react-redux"


export default function Page2(){
    const data2 = useSelector(stat=>stat.data2);
    const dispatch = useDispatch();

    return(
        <>
            <h1>{data2}</h1>
            <input type='text' onChange={(e)=>dispatch({type:"INT",data:+e.target.value})}></input>
        </>
    )
}