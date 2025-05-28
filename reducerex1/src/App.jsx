import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//reducer : state를 업데이트 하는 역할. 즉 함수이다.
//action : 업데이트하고자 하는 내용.(무엇을 무엇으로)
//dispatch : state업데이트를 위한 요구. 즉, reducer함수를 호출

const reducer = (state,action) => {
  switch(action.type){
    case 'deposit' : return +state+(+action.data);
    case 'withdraw' : return +state - (+action.data);
    default : return state;
  }
}

function App() {
  const [money, setMoney] = useState(0);
  const [balance,dispatch] = useReducer(reducer,0);

  return (
    <>
      <h2>useReducer 은행</h2>
      <p>잔액 : {balance}</p>
      <input type="number" step={1000} value={money} onInput={(e)=>setMoney(e.target.value)}/>
      <button onClick={()=>dispatch({type:'deposit',data:money})}>입금</button>
      <button onClick={()=>dispatch({type:'withdraw',data:money})}>출금</button>
    </>
  )
}

export default App
