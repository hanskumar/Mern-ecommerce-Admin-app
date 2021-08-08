import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    categories:categoryReducer
})

export default rootReducer;