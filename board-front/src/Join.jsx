import './Join.css'

export const Join = () => {
    return (
        <>
            <div class="center"><h3>회원가입</h3></div>
            <form action="join" method="post">
                <table border="1" class="container">
                    <tr><th>아이디</th><td> <input type="text" name="id" id="id" />&nbsp;<button id="doubleId">중복</button> </td></tr>
                    <tr><th>이름</th><td> <input type="text" name="name" /> </td></tr>
                    <tr><th>비밀번호</th><td> <input type="password" name="password" /> </td></tr>
                    <tr><th>이메일</th><td> <input type="text" name="email" /> </td></tr>
                    <tr><th>주소</th>
                        <td><input type="button" onclick="daumPostcode()" value="주소 찾기" /><br />
                            <input type="text" id="address" name="address" placeholder="주소" /><br />
                            <input type="text" id="detailAddress" name="detailAddress" placeholder="상세주소" />
                        </td>
                    </tr>
                    <tr><td colspan="2" class="center"><input type="submit" value="회원가입" /></td></tr>
                </table>
            </form>
        </>
    )
}