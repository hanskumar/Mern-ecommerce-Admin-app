import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    categories:categoryReducer,
    product:productReducer
})

export default rootReducer;