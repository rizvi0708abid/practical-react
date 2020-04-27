export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const ERROR_IN_RECIVE_PRODUCTS = "ERROR_IN_RECIVE_PRODUCTS";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const REQUEST_SEARCHED_PRODUCTS = "REQUEST_SEARCHED_PRODUCTS";
export const RECEIVE_SEARCHED_PRODUCTS = "RECEIVE_SEARCHED_PRODUCTS";
export const ERROR_IN_RECIVE_SEARCHED_PRODUCTS =
  "ERROR_IN_RECIVE_SEARCHED_PRODUCTS";

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

export const requestLogin = () => {
  console.log("Inside LOGIN action creator");
  return {
    type: LOGIN,
    payload: true,
  };
};

export const requestLogout = () => {
  console.log("Inside LOGOUT action creator");
  return {
    type: LOGOUT,
    payload: false,
  };
};

export const requestSearchedProducts = (pageNumber, pageSize, search) => {
  console.log("Inside requestProducts searchtext", search);
  return {
    type: REQUEST_SEARCHED_PRODUCTS,
    payload: { pageNumber, pageSize, search },
  };
};

export const receiveSearchedProducts = (products) => {
  console.log("Inside receiveProducts :: ", products);
  return {
    type: RECEIVE_SEARCHED_PRODUCTS,
    products,
  };
};

export const errorInReceiveSearchedProducts = (payload) => {
  console.log("Inside ERROR_IN_RECIVE_PRODUCTS");
  return {
    type: ERROR_IN_RECIVE_SEARCHED_PRODUCTS,
    payload: payload.error,
  };
};
