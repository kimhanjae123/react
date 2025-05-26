import './App.css';
import Subject from './Subject';

function App() {
  const subjects=[
    {key:'JSON',text:'JavaScrtip'},
    {key:'java',text:'Java'},
    {key:'jq',text:'JQuery'},
    {key:'hc',text:'HTML/CSS'},
    {key:'spring',text:'SpringFramework'}
  ]
  return (
    <>
      <select>
        <Subject subjects={subjects}/>  
      </select>    
    </>
  )
}

export default App
