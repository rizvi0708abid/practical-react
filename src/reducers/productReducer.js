import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  ERROR_IN_RECIVE_PRODUCTS,
} from "../actions/actions";

export default (
  state = {
    products: [],
    loading: false,
    pageNumber: 1,
    pageSize: 8,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        loading: true,
        pageNumber: action.payload.pageNumber,
        pageSize: action.payload.pageSize,
        error: null,
      };
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
        loading: false,
        error: null,
      };
    case ERROR_IN_RECIVE_PRODUCTS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
