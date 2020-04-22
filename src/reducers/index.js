import { combineReducers } from "redux";
import productReducer from "./productReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  productReducer,
  form: formReducer,
});
