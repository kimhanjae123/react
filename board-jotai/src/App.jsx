import { useState } from 'react'
import './App.css'
import { BoardDetail } from './component/BoardDetail'
import BoardList from './component/BoardList'
import { Header } from './component/Header'
import Login from './component/Login'
import { ModifyForm } from './component/ModifyForm'
import { WriteForm } from './component/WriteForm'
import { Route,Routes } from 'react-router-dom';
import Join from './component/Join';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<BoardList />} />
        <Route path="/detail/:num" element={<BoardDetail />} />
        <Route path="/join" element={<Join />} />
        <Route path="/modify/:num" element={<ModifyForm />} />
        <Route path="/write" element={<WriteForm />} />
      </Routes>
    </>
  )
}

export default App
