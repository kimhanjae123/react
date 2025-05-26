import Department from "./Department";

function Employee2({depts,emps}){
    return (
        <>
            <Department depts={depts}/>
             <table border={1}>
                <tbody>
                    <tr><td>아이디</td><td>이름</td><td>부서아이디</td><td>부서명</td></tr>
                    {emps.map((e) => {
                        return (
                            
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.dept}</td>
                                <td>{depts.find(d=>d.id==e.dept).name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}

export default Employee2;