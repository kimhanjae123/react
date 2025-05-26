function Department({ depts }) {

    return (
        <>
            <select name="dept">
                {depts.map((d) => {
                    return <option value={d.id}>{d.name}</option>
                })}
            </select>
        </>
    )

}

export default Department;