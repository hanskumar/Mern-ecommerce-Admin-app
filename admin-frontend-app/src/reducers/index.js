import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer"
import initialDataReducer from "./initialDataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    categories:categoryReducer,
    products:productReducer,
    initialData:initialDataReducer
})

export default rootReducer;