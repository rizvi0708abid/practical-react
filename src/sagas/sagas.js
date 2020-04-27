import { call, put, takeLatest } from "redux-saga/effects";
import { fetchProductsfromApi, fetchSearchedProductsfromApi } from "../api";
import {
  RECEIVE_PRODUCTS,
  REQUEST_PRODUCTS,
  ERROR_IN_RECIVE_PRODUCTS,
  RECEIVE_SEARCHED_PRODUCTS,
  REQUEST_SEARCHED_PRODUCTS,
  ERROR_IN_RECIVE_SEARCHED_PRODUCTS,
} from "../actions/actions";

function* fetchProducts(action) {
  try {
    console.log("sagas...payload", action);
    const products = yield call(
      fetchProductsfromApi,
      action.payload.pageNumber,
      action.payload.pageSize
    );
    yield put({ type: RECEIVE_PRODUCTS, products: products });
    console.log("products recieved ...", products);
  } catch (e) {
    yield put({ type: ERROR_IN_RECIVE_PRODUCTS, payload: e.message });
  }
}

function* fetchSearchedProducts(action) {
  try {
    console.log("sagas...payload", action);
    const products = yield call(
      fetchSearchedProductsfromApi,
      action.payload.pageNumber,
      action.payload.pageSize,
      action.payload.search
    );
    yield put({ type: RECEIVE_SEARCHED_PRODUCTS, products: products });
    console.log("searched products recieved ...", products);
  } catch (e) {
    yield put({ type: ERROR_IN_RECIVE_PRODUCTS, payload: e.message });
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_PRODUCTS, fetchProducts);
  yield takeLatest(REQUEST_SEARCHED_PRODUCTS, fetchSearchedProducts);
}
