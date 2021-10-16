import {combineReducers} from "redux";
import tabReducer from "./tab/tabReducer";
import MarketReducer from "./market/MarketReducer";

export default combineReducers({
    tabReducer,
    MarketReducer

})