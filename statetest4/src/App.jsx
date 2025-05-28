import { useState } from 'react'
import './App.css'

function App() {
  const [accs, setAccs] = useState([
    { id: '1001', name: '홍길동', balance: 100000, type: '특수', grade: 'VIP' },
    { id: '1002', name: '김길동', balance: 200000, type: '일반', grade: '' },
    { id: '1003', name: '박길동', balance: 300000, type: '특수', grade: 'Gold' },
    { id: '1004', name: '이길동', balance: 400000, type: '특수', grade: 'Silver' },
    { id: '1005', name: '좌길동', balance: 500000, type: '특수', grade: 'Normal' },
  ])

  const [acc,setAcc] = useState({id:'',name:'',balance:0,type:'',grade:''})

  const inputAcc=(e)=>{
    setAcc({...acc,[e.target.id]:e.target.value
      ,[e.target.name]:e.target.value
      ,[e.target.balance]:e.target.value
      ,[e.target.type]:e.target.value
      ,[e.target.grade]:e.target.value
    })
  }

  const addAcc= () =>{
    console.log(acc);
    setAccs([...accs,acc])
  }

  const delAcc=(accId)=>{
    setAccs(accs.filter(a=>a.id!=accId))
  }

  return (
    <>
      <table border={1}>
        <tbody>
          <tr><th>아이디</th><td><input type="test"name="id"onChange={inputAcc}/></td></tr>
          <tr><th>이름</th><td><input type="test"name="name"onChange={inputAcc} /></td></tr>
          <tr><th>잔액</th><td><input type="test"name="balance"onChange={inputAcc} /></td></tr>
          <tr><th>종류</th><td>
            <input type="radio" name="type"onChange={inputAcc} value="특수" /><span>특수</span>
            <input type="radio" name="type" value="일반" /><span>일반</span>
          </td></tr>
          <tr><th>등급</th><td>
            <select name="grade"onChange={inputAcc} >
              <option value="VIP">VIP</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Normal">Normal</option>
            </select>
          </td></tr>
          <tr>
            <td colSpan={2}><button onClick={addAcc}>추가</button></td>
          </tr>
        </tbody>
      </table>
      <br/>
      <table border={1}>
        <tbody>
          <tr><th>아이디</th><th>이름</th><th>잔액</th><th>종류</th><th>등급</th></tr>
          {accs.map(a => <tr key={a.id}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.balance}</td>
            <td>{a.type}</td>
            <td>{a.grade}</td>
            <td><button onClick={()=>delAcc(a.id)}>삭제</button></td>
          </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default App
