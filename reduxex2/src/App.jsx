import { useSelector } from 'react-redux';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {
  const {value} = useSelector(state=>state.persistedReducer.value);
  const {count} = useSelector(state=>state.persistedReducer.count);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        value : {value}
      </div>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
      <button onClick={()=>dispatch({type:'RESET'})}>reset</button> 
      <div>
        count : {count}
      </div>
      <button onClick={()=>dispatch({type:'PUSH'})}>up</button>
    </>
  )
}

export default App
