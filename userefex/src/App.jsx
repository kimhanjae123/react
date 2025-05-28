import { useRef } from 'react'

function App() {
  const elRef = useRef();

  return (
    <>
      <input type="text" ref={elRef} />
      <button onClick={() => alert(elRef.current.value)}>Alert</button>
    </>
  )
}

export default App
