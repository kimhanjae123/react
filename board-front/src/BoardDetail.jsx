import { useEffect, useState } from 'react'
import './BoardDetail.css'
import axios from 'axios';
import { url } from '../../bank-front/src/config';
import { useParams } from 'react-router-dom';

export const BoardDetail = () => {
    const [board, setBoard] = useState({ num: 0, writer: '', title: '', content: '', imgFileName: '', fileName: '' })
    const [user, setUser] = useState({ id: '', name: '', nickname: '' })
    const [like, setLike] = useState('123');
    const {num} = useParams();
    console.log("num:", num);
    useEffect(()=>{
        axios.get(`${url}/detail/${num}`)
        .then(res=>{
            setBoard(res.data);
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    return (
        <>
            <h2>게사판 글 상세</h2>
            <table border="1">
                <tr>
                    <td className="td_left"><label>글쓴이</label></td>
                    <td className="td_right"><span>{board.writer}</span></td>
                </tr>
                <tr>
                    <td className="td_left"><label>제목</label></td>
                    <td className="td_right"><span>{board.title}</span></td>
                </tr>
                <tr>
                    <td className="td_left"><label>내용</label></td>
                    <td className="td_right"><div id="content">{board.content}</div></td>
                </tr>
                {board.imgFileName &&
                    <tr>
                        <td className="td_left"><label>이미지</label></td>
                        <td className="td_right">
                            <img src="/image?filename=${board.imgFileName }" width="100px" />
                        </td>
                    </tr>
                }
                {board.fileName &&
                    <tr>
                        <td className="td_left"><label>파일다운로드</label></td>
                        <td className="td_right">
                            <a href="/filedown?filename=${board.fileName }">${board.fileName}</a>
                        </td>
                    </tr>
                }
            </table >
            <div id="commandCell">
                <a href={`/modify/${board.num}`}>수정</a>&nbsp;&nbsp;&nbsp;
                <a href="/list">목록</a>&nbsp;&nbsp;&nbsp;
                {user && (
                    like ? (
                        <img
                            src={`${url}/resources/image/redheart.png`}
                            width="40px"
                            height="40px"
                            style={{ marginTop: '5px' }}
                            id="like"
                        />
                    ) : (
                        <img
                            src={`${url}/resources/image/blackheart.png`}
                            width="40px"
                            height="40px"
                            style={{ marginTop: '5px' }}
                            id="like"
                        />
                    )
                )}
            </div >
        </>
    )
}