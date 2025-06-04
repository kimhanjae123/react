import { useAtom } from 'jotai'
import { darkModeAtom } from './atoms'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <>
      <h1>Welcome to {darkMode? 'dark':'light'}</h1>
      <button onClick={()=>setDarkMode(!darkMode)}>toggle theme</button>
    </>
  )
}

export default App
