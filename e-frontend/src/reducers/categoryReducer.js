import { CategoryConstants } from "../actions/constants"

const intialState = {
    categories:[],
    loading:false,
    error:''
}

export default (state = intialState,action)=>{
   // console.log(action);
    switch(action.type){
        case CategoryConstants.GET_ALL_CATEGORIES_REQUEST:
            state = {
                ...state,
                loading:true
            }
        break;
    }

    switch(action.type){
        case CategoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                loading:false,
                categories:action.payload.categories
            }
        break;
    }

    switch(action.type){
        case CategoryConstants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading:true           
             }
        break;
    }

    switch(action.type){
        case CategoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading:false,
                categories:[action.payload.categories,...state.categories]          
             }
        break;
    }

    switch(action.type){
        case CategoryConstants.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...state,
                loading:false,
                error:action.payload.error           
             }
        break;
    }

    return state;
}