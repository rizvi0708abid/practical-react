import {
  REQUEST_SEARCHED_PRODUCTS,
  RECEIVE_SEARCHED_PRODUCTS,
  ERROR_IN_RECIVE_SEARCHED_PRODUCTS,
} from "../actions/actions";

export default (
  state = {
    products: [],
    loading: false,
    pageNumber: 1,
    pageSize: 6,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SEARCHED_PRODUCTS:
      return {
        ...state,
        loading: true,
        pageNumber: action.payload.pageNumber,
        pageSize: action.payload.pageSize,
        search: action.payload.searchText,
        error: null,
      };
    case RECEIVE_SEARCHED_PRODUCTS:
      return {
        ...state,
        products: action.products,
        loading: false,
        error: null,
      };
    case ERROR_IN_RECIVE_SEARCHED_PRODUCTS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
