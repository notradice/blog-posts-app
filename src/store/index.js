import { createStore, combineReducers } from "redux";
import { postReducers } from "./reducers/post";

const rootReducer = combineReducers({
  post: postReducers,
});

export default createStore(rootReducer);

