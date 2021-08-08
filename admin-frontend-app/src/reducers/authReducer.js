import { authConstants } from "../actions/constants"

const intialState = {
    token:'',
    user:{
        name:'',
        email:'',
        profile_pic:''
    },
    authanticate:false,
    authanticating:true
}

export default (state = intialState,action)=>{
    console.log(action);
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authanticating:true
            }
        break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                authanticating:false,
                authanticate:true
            }  
        break;
        
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...intialState
            }  
        break;
    }

    return state;
}