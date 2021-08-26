import { ProductConstants } from "./constants"
import axiosIntance from "../helpers/axios"; 

export const getProductsByCategory  =(categorySlug) =>{
    
    return async (dispatch) => {
        //dispatch({type:ProductConstants.GET_ALL_PRODUCT_REQUEST})

        const res = await axiosIntance.get(`/productByCategory/${categorySlug}`);

        if(res.status === 200){
            const {data} = res.data;

            console.log("PRoduct Data:",data);
           
            dispatch({
                type:ProductConstants.GET_PRODUCT_BY_SLUG_SUCCESS,
                payload:{ data }
            });   
        } else {
            dispatch({
                type:ProductConstants.GET_PRODUCT_BY_SLUG_FAILURE,
                payload:{error:res.data.err}
            }); 
        }
        
    }
}


