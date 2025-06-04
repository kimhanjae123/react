import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userAtom } from '../atoms';
import './BoardDetail.css';
import { url } from './config';
import { useAtomValue } from 'jotai/react';

export const BoardDetail = () => {
    const [board, setBoard] = useState({ num: '', writer: '', title: '', content: '', imgFileName: null, fileName: null })
    const user = useAtomValue(userAtom);
    const [like, setLike] = useState(false);
    const { num } = useParams();    
    console.log("num:", num);

    useEffect(() => {
        axios.post(`${url}/detail`,{id:user.id,num:num})
            .then(res => {
                setBoard(res.data.board);
                setLike(res.data.checkId);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const likeToggle = ()=>{
        axios.post(`${url}/boardLike`,{id:user.id,num:num})
        .then(res=>{
            console.log(res);
            setLike(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <>
            <h2>게사판 글 상세</h2>
            <table border="1">
                <tbody>
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
                    {board.imgFileName !=null?
                        <tr>
                            <td className="td_left"><label>이미지</label></td>
                            <td className="td_right">
                                <img src={`${url}/image?filename=${board.imgFileName}`} width="100px" />
                            </td>
                        </tr>:''
                    }
                    {board.fileName !=null?
                        <tr>
                            <td className="td_left"><label>파일다운로드</label></td>
                            <td className="td_right">
                                <a href={`${url}/filedown?filename=${board.fileName}`}>${board.fileName}</a>
                            </td>
                        </tr>:''
                    }
                </tbody>
            </table >
            <div id="commandCell">
                {user.name == board.writer ?
                    <a href={`/modify/${board.num}`}>수정</a>
                    :''
                }&nbsp;&nbsp;&nbsp;
                <a href="/list">목록</a>&nbsp;&nbsp;&nbsp;
                {user && (
                    like ? (
                        <img
                            src={`/redheart.png`}
                            width="40px"
                            height="40px"
                            style={{ marginTop: '5px' }}
                            id="like"
                            onClick={likeToggle}
                        />
                    ) : (
                        <img
                            src={`/blackheart.png`}
                            width="40px"
                            height="40px"
                            style={{ marginTop: '5px' }}
                            id="like"
                            onClick={likeToggle}
                        />
                    )
                )}
            </div >
        </>
    )
}