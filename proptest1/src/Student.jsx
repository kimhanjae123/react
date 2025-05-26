function Student({ stud }) {

    return (
        <>
            <tr>
                <td>{stud.name}</td>
                <td>{stud.grade}</td>
                <td>{stud.subject}</td>
            </tr>
        </>
    )
}

export default Student;