import { authConstants } from "./constants"
import axiosIntance from "../helpers/axios"; 

export const login =(user) =>{
    console.log(user);
    
    return async (dispatch) => {

        const response = await axiosIntance.post('/admin/login',{
            ...user
        });

        dispatch({
            type:authConstants.LOGIN_REQUEST,
            payload:{
                ...user
            }
        })
    }
}