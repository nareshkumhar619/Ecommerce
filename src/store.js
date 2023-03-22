import { createStore } from "redux";
import rootReducer from "./COMPONENT/Redux/reducers/main";

const store =createStore(
    rootReducer

);

export default store ;