import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BoardDetail } from './BoardDetail';
import { Header } from './Header';
import { ModifyForm } from './ModifyForm';
import { WriteForm } from './WriteForm';
import BoardList from './BoardList';
import Login from './Login';
import Join from './Join';

function App() {

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
