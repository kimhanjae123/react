import { useState } from 'react';
import './App.css';
import NameInfo from './NameInfo';
import GradeInfo from './GradeInfo';
import WeightInfo from './WeightInfo';

function App() {
  const [name, setName] = useState('코스타');
  const [grade, setGrade] = useState(4);
  const [weight, setWeight] = useState(75.3);
  return (
    <>
      <h1>App.jsx</h1>
      <p>이름:{name},학년;{grade},몸무게:{weight}</p>
      <NameInfo name={name} setName={setName} />
      <GradeInfo grade={grade} setGrade={setGrade} />
      <WeightInfo weight={weight} setWeight={setWeight}/>
    </>
  )
}

export default App
