function Employee({ emps }) {

    return (
        <>
            <table border={1}>
                <tbody>
                    <tr><td>아이디</td><td>이름</td><td>부서아이디</td></tr>
                    {emps.map((e) => {
                        return (
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.dept}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}
export default Employee;