import { InitialDataConstants } from "../actions/constants"

const intialState = {
    categories:[],
    products:[],
    loading:false,
    error:''
}

export default (state = intialState,action)=>{
    console.log(action);
    switch(action.type){
        case InitialDataConstants.GET_INTITIAL_DATA_REQUEST:
            state = {
                ...state,
                loading:true
            }
        break;
    }

    switch(action.type){
        case InitialDataConstants.GET_INTITIAL_DATA_SUCCESS:
            state = {
                ...state,
                loading:false,
                categories:action.payload.categories,
                products:action.payload.products
            }
        break;
    }

    return state;
}