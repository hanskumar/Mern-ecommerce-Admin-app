import { ProductConstants } from "./constants"
import axiosIntance from "../helpers/axios"; 

export const getAllProducts  =() =>{
    
    return async (dispatch) => {
        dispatch({type:ProductConstants.GET_ALL_PRODUCT_REQUEST})

        const res = await axiosIntance.get('/admin/getProducts');

        if(res.status === 200){
            const {data} = res.data;
            //console.log("Category Data:",data);

            dispatch({
                type:ProductConstants.GET_ALL_PRODUCT_SUCCESS,
                payload:{ products: data }
            });   
        } else {
            /* dispatch({
                type:CategoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload:{error:res.data.err}
            }); */
        }
        
    }
}


export const addProdcut  = (form) => {
    return async dispatch => {

        dispatch({type:ProductConstants.ADD_NEW_PRODUCT_REQUEST});  

        //const token = localStorage.getItem('token');

        const res = await axiosIntance.post('/admin/addProduct',form);
        
        if(res.status === 200){
            const {data} = res.data;

            dispatch({
                type:ProductConstants.ADD_NEW_PRODUCT_SUCCESS,
                payload:{ products: data }
            });   
        } else {
            dispatch({
                type:ProductConstants.ADD_NEW_PRODUCT_FAILURE,
                payload:{error:res.data.err}
            }); 
        }
    }
} 

