import { useState } from 'react'
import './App.css'

function App() {

  const[user,setUser] = useState({name:"hong",email:"hong@naver.com",address:"경기 시흥"})
  const[data,setData] = useState("hi");
  const changeInput=(e)=>{
    setUser({...user,[e.target.name]:e.target.value
      ,[e.target.email]:e.target.value
      ,[e.target.address]:e.target.value
    })
  }
  
  

  return (
    <>
        <h1>{data}</h1>
        <input type="text" onChange={(e)=>setData(e.target.value)}/><br/><br/>
        <p>이름:{user.name},이메일:{user.email},주소:{user.address}</p>
        이름 : <input type="text" name="name" onChange={changeInput}/> <br/>
        이메일 : <input type="text" name="email" onChange={changeInput} /> <br/>
        주소 : <input type="text" name="address" onChange={changeInput} /> <br/>
    </>
  )
}

export default App
