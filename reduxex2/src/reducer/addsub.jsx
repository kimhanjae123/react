const initState = {
    value:0
}

export const addsubReducer = (state=initState,action) => {
    switch(action.type){
        case 'INCREMENT' : return {value:state.value+1};
        case 'DECREMENT' : return {value:state.value-1};
        case 'RESET' : return {value:0};
        default: return state;
    }
}