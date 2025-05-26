import Students from "./Students";

function App2() {
    const studs = [
        { name: 'hong', grade: 1, subject: 'computer' },
        { name: 'song', grade: 2, subject: 'sport' }
    ]

    return (
        <Students studs={studs} />
    )
}
export default App2;