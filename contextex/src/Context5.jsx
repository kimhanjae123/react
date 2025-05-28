import { useContext } from 'react';
import { UserContext } from './Context1';
export default function context5(){
    const {user,setUser}=useContext(UserContext);
    return(
        <>
            <h1>Context5</h1>
            <h3>{`Hello ${user} again!`}</h3>
            <input type="text" onChange={(e)=>setUser(e.target.value)}></input>
        </>
    )
}