import { useState } from "react";
import { url } from "./config";
import './Login.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai/react";
import { userAtom } from "../atoms";

export default function Login() {
    const [login, setLogin] = useState({ id: '', password: '' })
    const setUser = useSetAtom(userAtom);
    const navigate = useNavigate();
    const edit = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post(`${url}/login`, login)
            .then(res => {
                console.log(res)
                const user = res.data;
                setUser(user);
                navigate("/list")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="center"><h3>로그인</h3></div>
            <div className="container">
                <form onSubmit={submit}>
                    <table border="1" className="loginTable">
                        <tbody>
                            <tr>
                                <th>아이디</th>
                                <td><input type="text" name="id" onChange={edit} /></td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td><input type="text" name="password" onChange={edit} /></td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="center"><input type="submit" value="로그인" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}