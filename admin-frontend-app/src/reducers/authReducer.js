import { authConstants } from "../actions/constants"

const intialState = {
    name:'Hansh',
    email:'test@gmail.com'
}

export default (state = intialState,action)=>{
    console.log(action);
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state
            }
            break;
    }

    return state;
}