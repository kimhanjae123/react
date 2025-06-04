import { useDispatch, useSelector } from "react-redux"
import Page2 from "./page2";

export default function Page1(){
    const data1 = useSelector(state=>state.data1);
    const dispatch = useDispatch();
    return(
        <>
            <h1>{data1}</h1>
            <input type='text' onChange={(e)=>dispatch({type:'STRING',data:e.target.value})}/>
            <Page2/>
        </>
    )
}