import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person';


function App() {
  let perInfo = { name: 'song', age: 30, nick: '송송이' };

  return (
    <>
      {/* <PropTest per={perInfo}/> */}
      <Person perInfo={perInfo} />
    </>
  )
}

export default App
