import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initState, reducer } from './MyReducer';
import MyNickname from '../MyNickName';

function App() {
  const [info, dispatch] = useReducer(reducer, initState);

  const edit = (e) => {
    dispatch({ type: e.target.name, data: e.target.value })
  }

  return (
    <>
      <label>{info.id}</label>&nbsp;&nbsp;&nbsp;
      <input type="text" name="ID" onChange={edit} /><br />
      <MyNickname info={info} dispatch={dispatch}/>
      <label>{info.subject}</label>&nbsp;&nbsp;&nbsp;
      <input type="text" name="SUBJECT" onChange={edit} /><br />
      <label>{info.grade}</label>&nbsp;&nbsp;&nbsp;
      <input type="text" name="GRADE" onChange={edit} /><br />
    </>
  )
}

export default App
