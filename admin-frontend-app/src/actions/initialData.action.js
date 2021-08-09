import { InitialDataConstants } from "./constants"
import axiosIntance from "../helpers/axios"; 

export const getInitialData  =() =>{
    
    return async (dispatch) => {
        //dispatch({type:InitialDataConstants.GET_INTITIAL_DATA_REQUEST})

        const res = await axiosIntance.get('/admin/getInitialData');

        if(res.status === 200){
            const { categories, products } = res.data.data;
            console.log("Category Data:",categories);

            /* dispatch({
                type: CategoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories },
            });

            dispatch({
                type: ProductConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { products },
            }); */

            dispatch({
                type:InitialDataConstants.GET_INTITIAL_DATA_SUCCESS,
                payload:{ products,categories }
            });   
        } else {
            console.log("error");
            /* dispatch({
                type:CategoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload:{error:res.data.err}
            }); */
        }
        
    }
}