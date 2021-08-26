import { ProductConstants } from "../actions/constants"

const intialState = {
    products:[],
    productByPrice:{
        under5k:[],
        under10k:[],
        under15k:[],
        under20k:[],
        under30k:[]
    },
    loading:true,
    error:''
}

export default (state = intialState,action)=>{
    
    switch(action.type){
        
        case ProductConstants.GET_PRODUCT_BY_SLUG_SUCCESS:

            console.log("action.payload",action);
            state = {
                ...state,
                loading:false,
                products:action.payload.data.products,
                productByPrice:{
                    ...action.payload.data.productByPrice
                }
            }
        break;
    }

    switch(action.type){
        case ProductConstants.GET_PRODUCT_BY_SLUG_FAILURE:
            state = {
                ...state,
                loading:false,
                error:action.payload.error           
             }
        break;
    }

    return state;
}