import { ProductConstants } from "../actions/constants"

const intialState = {
    products:[],
    loading:false,
    error:''
}

export default (state = intialState,action)=>{
    console.log(action);
    switch(action.type){
        case ProductConstants.GET_ALL_PRODUCT_REQUEST:
            state = {
                ...state,
                loading:true
            }
        break;
    }

    switch(action.type){
        case ProductConstants.GET_ALL_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading:false,
                products:action.payload.products
            }
        break;
    }

    switch(action.type){
        case ProductConstants.ADD_NEW_PRODUCT_REQUEST:
            state = {
                ...state,
                loading:true           
             }
        break;
    }

    switch(action.type){
        case ProductConstants.ADD_NEW_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading:false,
                products:[action.payload.products,...state.products]          
             }
        break;
    }

    switch(action.type){
        case ProductConstants.ADD_NEW_PRODUCT_FAILURE:
            state = {
                ...state,
                loading:false,
                error:action.payload.error           
             }
        break;
    }

    return state;
}