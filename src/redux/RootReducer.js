import { combineReducers } from "redux";
import itemReducer from "./Item/ItemReducer";

const rootReducer = combineReducers({
    posts: itemReducer
})

export default rootReducer