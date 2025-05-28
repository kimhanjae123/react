import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AccountInfo } from './AccountInfo';
import './App.css';
import { Deposit } from './Deposit';
import Header from './Header';
import { Login } from './Login';
import { MakeAccount } from './MakeAccount';
import { Transfer } from './Transfer';
import { Withdraw } from './Withdraw';
import AccountInfoForm from './AccountInfoForm';
import AllAccountInfo from './AllAccountInfo';
import Join from './Join';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/join" element={<Join/>}/>
          <Route exact path="/accountInfoForm" element={<AccountInfoForm/>}/>
          <Route exact path="/deposit" element={<Deposit/>}/>
          <Route exact path="/withdraw" element={<Withdraw/>}/>
          <Route exact path="/transfer" element={<Transfer/>}/>
          <Route exact path="/makeAccount" element={<MakeAccount/>}/>
          <Route exact path="/accountInfo" element={<AccountInfo/>}/>
          <Route exact path="/allAccountInfo" element={<AllAccountInfo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
