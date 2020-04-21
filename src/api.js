export const fetchProductsfromApi = async (pageNumber, pageSize) => {
  try {
    console.log("....Api...payload", pageNumber, pageSize);
    const response = await fetch(
      `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/${pageNumber}/${pageSize}`
    );
    const products = await response.json();
    return products;
  } catch (e) {
    console.log(e);
  }
};
