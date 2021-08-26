import { CategoryConstants } from "./constants"
import axiosIntance from "../helpers/axios"; 

export const getAllCategory  =() =>{
    
    return async (dispatch) => {
        dispatch({type:CategoryConstants.GET_ALL_CATEGORIES_REQUEST})

        const res = await axiosIntance.get('/admin/getCategories');
        
        if(res.status === 200){
            const {data} = res.data;
            //console.log("Category Data:",data);

            dispatch({
                type:CategoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload:{ categories: data }
            });   
        } else {
            /* dispatch({
                type:CategoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload:{error:res.data.err}
            }); */
        }
        
    }
}


export const addCategory  = (form) => {
    return async dispatch => {

        dispatch({type:CategoryConstants.ADD_NEW_CATEGORY_REQUEST});  

        //const token = localStorage.getItem('token');

        const res = await axiosIntance.post('/admin/addCategory',form);
        
        if(res.status === 200){
            const {data} = res.data;

            dispatch({
                type:CategoryConstants.ADD_NEW_CATEGORY_SUCCESS,
                payload:{ categories: data }
            });   
        } else {
            dispatch({
                type:CategoryConstants.ADD_NEW_CATEGORY_FAILURE,
                payload:{error:res.data.err}
            }); 
        }
    }
} 

