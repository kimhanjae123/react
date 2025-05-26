//props = {subjects:subjects}
function Subject({subjects}){
    return (
        <>
            {subjects.map((s)=>{
                return <option key={s.key}>{s.text}</option>
            })}
        </>
    )
}

export default Subject;