import { createContext, useState } from "react";
import Context2 from "./Context2";
export const UserContext = createContext();
export default function Context1(){
    const [user,setUser] = useState("Micle");
    return(
        /*키와밸류의 값이 같다면 밑에처럼 user로 해도됌
        만약 다르다면 user:user1이런식으로 해줘야함.*/
        <UserContext.Provider value={{user,setUser}}>

            <h1>{`Hello, ${user}!`}</h1>
            <Context2/>
        </UserContext.Provider>
    )
}