import { authConstants } from "../actions/constants"

const intialState = {
    name:'Hansh'
}

export default (state = intialState,action)=>{
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state
            }
            break;
    }


    return state;

}