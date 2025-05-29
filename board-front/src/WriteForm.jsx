import { useState } from 'react'
import './WriteForm.css'
import axios from 'axios';
import { url } from '../../bank-front/src/config';

export const WriteForm = () => {
    const [user, setUser] = useState({ id: '', name: '', nickname: '' })
    const [board, setBoard] = useState({ num: 0, writer: '', title: '', content: '', imgFileName: '', fileName: '' })
    const [write, setWrite] = useState({ writer: '', title: '', content: '', dfile: '' })
    const edit = (e) => {
        setWrite({ ...write, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post(`${url}/write`, write)
            .then(res => {
                setBoard(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <h2>게시판 글 등록</h2>
            <form action="write" method="post" encType="multipart/form-data">
                <input type="hidden" name="writer" id="writer" value={user.id} onChange={edit} />
                <table>
                    <tbody>
                        <tr>
                            <td className="td_left"><label>글쓴이</label></td>
                            <td className="td_right"><input type="text" readOnly="readonly" value={user.name} /></td>
                        </tr>
                        <tr>
                            <td className="td_left"><label>제목</label></td>
                            <td className="td_right"><input type="text" name="title" id="title" required="required" onChange={edit} /></td>
                        </tr>
                        <tr>
                            <td className="td_left"><label>내용</label></td>
                            <td className="td_right"><textarea id="content" name="content" cols="40" rows="15" onChange={edit}></textarea></td>
                        </tr>
                        <tr>
                            <td className="td_left"><label>이미지 파일 첨부</label></td>
                            <td className="td_right">
                                <img src="/plus.png" alt="이미지선택" id="preview" width="100px"/>
                                <input type="file" name="ifile" id="ifile" accept="image/*" style={{ display: 'none' }} onChange={edit} />
                            </td>
                        </tr>
                        <tr>
                            <td className="td_left"><label>파일 첨부</label></td>
                            <td className="td_right">
                                <input type="file" name="dfile" id="dfile" onChange={edit} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="commandCell">
                    <input type="submit" value="등록" onClick={submit} />&nbsp;&nbsp;
                    <input type="reset" value="다시쓰기" />&nbsp;&nbsp;
                    <a href="list">목록</a>
                </div>
            </form>
        </>
    )
}