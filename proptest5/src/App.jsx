import './App.css'
import SubComponent from './SubComponent'

function App() {

  return (
    <>
     <SubComponent str={"react"} num={30}boolean={true} obj={{react:'리액트',exam:2025}}
     arr={[1,2,3]} func={console.log("I am Function")}/>
    
    </>
  )
}

export default App
