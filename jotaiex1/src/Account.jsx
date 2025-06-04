import { useAtom } from "jotai";
import { useState } from "react";
import { accAtom } from "./atoms";
import Withdraw from "./withdraw";


export default function Account(){
    const [money,setMoney] = useState(0);
    const [acc,setAcc] = useAtom(accAtom);
    const deposit = ()=>{
        setAcc({...acc,balance:money+acc.balance})
    }
    return (
        <>
            <table border={1}>
                <tbody>
                    <tr><td>계좌번호</td><td>{acc.id}</td></tr>
                    <tr><td>이름</td><td>{acc.name}</td></tr>
                    <tr><td>잔액</td><td>{acc.balance}</td></tr>
                    <tr><td>입금</td>
                    <td>
                    <input type="text" onChange={(e)=>setMoney(+e.target.value)}/>
                    <button onClick={deposit}>입금</button>
                        </td></tr>
                    <tr><td>출금</td>
                    <td><Withdraw/></td></tr>
                </tbody>
            </table>
        </>
    )
}