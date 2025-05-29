import { useState } from 'react';
import './ModifyForm.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ModifyForm = () => {
    const [board, setBoard] = useState({ num: 0, writer: '', title: '', content: '', imgFileName: '', fileName: '' })
    const num = useParams();
    const submit = (e) => {
        e.preventDefault();
        axios.post(`${url}/modify/${num}`)
            .then(res => {
                setBoard(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <section id="./writeForm">
                <h2>게시판글수정</h2>
                <form action="/modify" method="post" encType="multipart/form-data">
                    <input type="hidden" name="num" value="${board.num}" />
                    <input type="hidden" name="writer" value="${board.writer}" />
                    <table>
                        <tbody>
                            <tr>
                                <td className="td_left"><label for="writer">글쓴이</label></td>
                                <td className="td_right"><input type="text" id="writer" readOnly="readonly" value={board.name} /></td>
                            </tr>
                            <tr>
                                <td className="td_left"><label for="title">제목</label></td>
                                <td className="td_right"><input name="title" type="text"
                                    id="title" required="required" />{board.title}</td>
                            </tr>
                            <tr>
                                <td className="td_left"><label for="content">내용</label></td>
                                <td><textarea id="content" name="content"
                                    cols="40" rows="15" required="required" defaultValue={board.content}></textarea></td>
                            </tr>
                            <tr>
                                <td className="td_left"><label>이미지</label></td>
                                <td className="td_right">
                                    {board.imgFileName != null ?
                                        (<img src="/image?filename=${board.imgFileName}" width="100px" id="preview" />)
                                        :
                                        (<img src="/resources/image/plus.png" alt="이미지선택" id="preview" width="100px" />
                                        )}
                                    <input type="file" name="ifile" id="ifile" accept="image/*" style={{display:"none"}} />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_left"><label for="dfile">파일 첨부</label></td>
                                <td className="td_right">
                                    <span id="dfilename" onClick="$('#dfile').click();">
                                        {board.fileName == null || board.fileName == '' ? ("파일없음") : (board.fileName)}
                                    </span>
                                    <input type="file" name="dfile" id="dfile" style={{display:"none"}} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <section id="commandCell">
                        <input type="submit" value="수정" />&nbsp;&nbsp;
                        <a href="/list">목록</a>&nbsp;&nbsp;&nbsp;
                    </section>
                </form>
            </section>
        </>
    )
}