import axios from 'axios';
import { useEffect, useState } from "react";
import { url } from "../../bank-front/src/config";
import './BoardList.css';
import { Link } from 'react-router-dom';
export const BoardList = () => {
    const [user, setUser] = useState({ id: '', name: '', nickname: '' })
    const [boardList, setBoardList] = useState([]);
    const [pageInfo, setPageInfo] = useState({ curPage: 1, startPage: 0, endPage: 0, allPage: 1 });

    useEffect(() => {
        axios.get(`${url}/list`)
            .then(res => {
                console.log(res.data);
                setBoardList(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <h2>글 목록&nbsp;&nbsp;&nbsp;&nbsp;
                {user.id && <a href="write">글쓰기</a>}
            </h2>
            <form action="list" method="get" id="search">
                <input type="hidden" name="page" value="1" id="page" />
                <select name="type" id="type">
                    <option value="title" selected="selected">제목</option>
                    <option value="writer">작성자</option>
                    <option value="content">내용</option>
                </select>
                <input type="text" name="word" value="" />
                <input type="submit" value="검색" />
            </form>
            <br />
            <table>
                <tr id="tr_top">
                    <th>번호</th><th>제목</th><th>작성자</th><th>날짜</th><th>조회수</th>
                </tr>
                {boardList.map(board =>
                (<tr key={board.num}>
                    <td>{board.num}</td>
                    <td> <Link to={`/detail/${board.num}`}>{board.title}</Link></td>
                    <td>{board.name}</td>
                    <td>{board.createDate}</td>
                    <td>{board.viewcnt}</td>
                </tr>)
                )}
            </table>
            <br />
            <div id="emptyArea">
                {pageInfo.curPage == 1 ? <>
                    <a>&lt;</a>
                </> :
                    <button onclick="submit(${pageInfo.curPage-1})">&lt;</button>
                }
                {Array.from({ length: pageInfo.endPage - pageInfo.startPage + 1 }, (_, idx) => {
                    const i = pageInfo.startPage + idx;
                    return (
                        <button
                            key={i}
                            className={i === pageInfo.curPage ? 'select' : ''}
                            onClick={() => submit(i)}
                        >
                            {i}
                        </button>
                    );
                })}
                {pageInfo.curPage >= pageInfo.allPage ? <>
                    <a>&gt;</a>
                </> :
                    <button onclick="submit(${pageInfo.curPage+1})">&gt;</button>
                }
            </div>
        </>
    )
}