import { authConstants } from "./constants"
import axios from "../helpers/axios"; 

export const login =(user) =>{
    console.log(user);
    return async (dispatch) => {

        const axios = await axios.post('/admin/login',{
            user
        });

        dispatch({
            type:authConstants.LOGIN_REQUEST,
            payload:{
                ...user
            }
        })
    }
}