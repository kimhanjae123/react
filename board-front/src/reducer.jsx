import { initPanelComponentToken } from "antd/es/date-picker/style"

export const initState = {
    user:{
        id:'',
        name:'',
        nickname:'',
        email:'',
        address:'',
        detailAddress:''
    }
}

export const userRedcer = (state=initState,action) => {
    switch(action.type){
        case 'USER' : return {...state,user:{...action.payload}};
        default : return state;
    }
}