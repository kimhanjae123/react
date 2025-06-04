import { useState } from 'react';
import './ModifyForm.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from './config';

export const ModifyForm = () => {
    const [board, setBoard] = useState({ num: 0, writer: '', title: '', content: '', imgFileName: '', fileName: '' });
        
    const [ifile,setIfile] = useState(null);
    const [dfile,setDfile] = useState(null);
    
    const num1 = useParams();

    const readURL = (input) => {
        if (input.target.files && input.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("preview").src = e.target.result;
            }
            reader.readAsDataURL(input.target.files[0]);
            setIfile(input.target.files[0]);
        }
    }
    const edit = (e) => {
        setBoard({...board,[e.target.name]:e.target.value})
    }

    const submit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
    }

    
    return (
        <>
            <section id="./writeForm">
                <h2>게시판글수정</h2>
                <form onSubmit={submit}>
                    <input type="hidden" name="num" value="${board.num}" />
                    <input type="hidden" name="writer" value="${board.writer}" />
                    <table>
                        <tbody>
                            <tr>
                                <td className="td_left"><label for="writer">글쓴이</label></td>
                                <td className="td_right"><input type="text" id="writer" readOnly="readonly" value={user.id} /></td>
                            </tr>
                            <tr>
                                <td className="td_left"><label for="title">제목</label></td>
                                <td className="td_right"><input name="title" type="text"
                                    id="title" required="required" onChange={edit}/>{board.title}</td>
                            </tr>
                            <tr>
                                <td className="td_left"><label for="content">내용</label></td>
                                <td><textarea id="content" name="content"
                                    cols="40" rows="15" required="required" onChange={edit} defaultValue={board.content}></textarea></td>
                            </tr>
                            <tr>
                                <td className="td_left"><label>이미지</label></td>
                                <td className="td_right">
                                    {board.imgFileName != null ?
                                        (<img src={`${url}/image?filename=${board.imgFileName}`} width="100px" id="preview"
                                            onClick={()=>document.getElementById('ifile').click()} />)
                                        :
                                        (<img src="/plus.png" alt="이미지선택" id="preview" width="100px"
                                            onClick={()=>document.getElementById('ifile').click()} />
                                        )}
                                    <input type="file" name="ifile" id="ifile" accept="image/*" style={{ display: "none" }} 
                                    onChange={readURL}/>
                                </td>
                            </tr>
                            <tr>
                                <td className="td_left"><label for="dfile">파일 첨부</label></td>
                                <td className="td_right">
                                    <span id="dfilename" onChange={(e)=>setDFile(e.target.file[0])}>
                                        {board.fileName == null || board.fileName == '' ? ("파일없음") : (board.fileName)}
                                    </span>
                                    <input type="file" name="dfile" id="dfile" style={{ display: "none" }} />
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