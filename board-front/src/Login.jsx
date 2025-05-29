import './Login.css'

export const Login = () => {
    return (
        <>
            <div class="center"><h3>로그인</h3></div>
            <div class="container">
                <form action="login" method="post">
                    <table border="1">
                        <tr>
                            <th>아이디</th>
                            <td><input type="text" name="id" value='' /></td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td><input type="text" name="password" value="" /></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                {/* <%if(autologin) { %>
                                    <input type="checkbox" value="true" name="autologin" checked="checked" />자동로그인
                                <%} else { %>
                                    <input type="checkbox" value="true" name="autologin" />자동로그인
                                <%} %> */}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="center"><input type="submit" value="로그인" /></td>
                        </tr>
                    </table>
                </form>
                <br />

            </div>
        </>
    )
}