import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchProductsfromApi } from "../api";
import {
  RECEIVE_PRODUCTS,
  REQUEST_PRODUCTS,
  ERROR_IN_RECIVE_PRODUCTS,
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

export default function* mySaga() {
  yield takeEvery(REQUEST_PRODUCTS, fetchProducts);
}
