import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import './App.css';
import { countAtom } from './atoms';
import Account from './Account';

function App() {
  const [count,setCount] = useAtom(countAtom);

  return (
    <>
      {count}&nbsp;
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <br/>
      <Account/>
    </>
  )
}

export default App
