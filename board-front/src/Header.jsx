import { useState } from "react";
import './Header.css'

export const Header= ()=>{
    const [user, setUser] = useState({ id: '', name: '', nickname: '' })
    const logout = (e)=>{
        e.preventDefault();
    }
    return (
            <div id="header">
                <img src="/kosta.png" width="100px" height="100px" />&nbsp;
                {user.id ? <>
                    <b>${user.name}</b>&nbsp;&nbsp;
                    <a href="logout" className="a" onClick={logout}>로그아웃</a>
                    </> :
                    <a href="/login" className="a">로그인</a>
                }&nbsp;&nbsp;&nbsp;
            <a href="/join" className="a">회원가입</a>&nbsp;&nbsp;&nbsp;
            <a href="/list" className="a">게시판목록</a><br /><br />
        </div >
    )
}