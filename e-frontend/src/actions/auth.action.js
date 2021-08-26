import { authConstants } from "./constants"
import axiosIntance from "../helpers/axios"; 

export const login =(user) =>{
    console.log(user);
    
    return async (dispatch) => {
        dispatch({
            type:authConstants.LOGIN_REQUEST,
            payload:{
                ...user
            }
        })

        const res = await axiosIntance.post('/admin/login',{
            ...user
        });

        if(res.status === 200){
            const {data} = res.data;

            localStorage.setItem('token',data.accessToken);
            localStorage.setItem('user', JSON.stringify(data));
            dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload:{token:data.accessToken,user:data}
            });  
        } else {
            dispatch({
                type:authConstants.LOGIN_FAILURE,
                payload:{error:res.data.err}
            });
        }
        
    }
}


export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failed to login' }
            });
        }
    }
}

export const LogOut = ()=>{

    localStorage.clear();
    return async dispatch => {
        dispatch({ type: authConstants.LOGOUT_REQUEST });
    }
} 