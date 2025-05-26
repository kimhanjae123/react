import './App.css'
import Employee2 from './Employee2';

function App2() {
  let departments = [
    { id: 10, name: "홍보부" },
    { id: 20, name: "개발부" },
    { id: 30, name: "영업부" }
  ]

  let employees = [
    { id: 100, name: '홍길동', dept: 10 },
    { id: 101, name: '김길동', dept: 20 },
    { id: 102, name: '고길동', dept: 30 }
  ]

  return (
    <>
      <Employee2 depts={departments} emps={employees} />
    </>
  )
}

export default App2;
