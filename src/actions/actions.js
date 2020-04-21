export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const ERROR_IN_RECIVE_PRODUCTS = "ERROR_IN_RECIVE_PRODUCTS";

export const requestProducts = (pageNumber, pageSize) => {
  console.log("Inside requestProducts", pageNumber, pageSize);
  return {
    type: REQUEST_PRODUCTS,
    payload: { pageNumber, pageSize },
  };
};

export const receiveProducts = (products) => {
  console.log("Inside receiveProducts :: ", products);
  return {
    type: RECEIVE_PRODUCTS,
    products,
  };
};

export const errorInReceiveProducts = (payload) => {
  console.log("Inside ERROR_IN_RECIVE_PRODUCTS");
  return {
    type: ERROR_IN_RECIVE_PRODUCTS,
    payload: payload.error,
  };
};
