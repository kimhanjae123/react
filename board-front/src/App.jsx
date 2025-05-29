import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BoardDetail } from './BoardDetail';
import { BoardList } from './BoardList';
import { Header } from './Header';
import { Join } from './Join';
import { Login } from './login';
import { ModifyForm } from './ModifyForm';
import { WriteForm } from './WriteForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/boardWrite" element={<BoardWrite/>}/> */}
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
