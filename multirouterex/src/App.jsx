import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import SideBar from './SideBar';
import MyInfo from './MyInfo';
import BookMark from './BookMark';
import About from './About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/sidebar/*" element={<SideBar/>}>
        <Route path="myinfo" element={<MyInfo/>}/>
        <Route path="mybookmark" element={<BookMark/>}/>
      </Route>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
