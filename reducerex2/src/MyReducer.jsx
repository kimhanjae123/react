export const initState = {
    id:'hong',
    nickname:'gildong',
    subject:'computere',
    grade:1
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ID': return { ...state, id: action.data }
        case 'NICKNAME': return { ...state, nickname: action.data }
        case 'SUBJECT': return { ...state, subject: action.data }
        case 'GRADE': return { ...state, grade: action.data }
        default: return { ...state }
    }
}