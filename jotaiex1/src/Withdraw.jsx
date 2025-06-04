import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { accAtom } from "./atoms";

export default function Withdraw(){
    const [money,setMoney] = useState(0);
    const acc = useAtomValue(accAtom);
    const setAcc = useSetAtom(accAtom);
    const withdraw = () =>{
        setAcc({...acc,balance:acc.balance-money});
    }
    return (
        <>
            <input type="text" onChange={(e)=>setMoney(+e.target.value)}></input>
            <button onClick={withdraw}>출금</button>
        </>
    )
}