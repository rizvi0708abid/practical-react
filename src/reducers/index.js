import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import searchedProductReducer from "./searchedProductsReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  productReducer,
  form: formReducer,
  authReducer,
  searchedProductReducer,
});
