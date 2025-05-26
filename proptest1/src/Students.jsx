import Student from "./Student";

function Students({ studs }) {

    return (
        <table border={1}>
            <tbody>
                <tr>
                    <td>이름</td><td>학년</td><td>전공</td>
                </tr>
                {studs.map((s) => {
                    return <Student stud={s} />
                })}
            </tbody>
        </table>
    )
}

export default Students;