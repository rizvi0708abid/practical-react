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

export const fetchSearchedProductsfromApi = async (
  pageNumber,
  pageSize,
  search
) => {
  try {
    console.log("....Api...payload search", search);
    console.log(
      `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/${pageNumber}/${pageSize}?search=${search}`
    );
    let url = "";

    if (search.includes("&") || search.includes("?")) {
      url = `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/${pageNumber}/${pageSize}${search}`;
    } else {
      url = `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/${pageNumber}/${pageSize}?search=${search}`;
    }

    const response = await fetch(url);
    const products = await response.json();
    return products;
  } catch (e) {
    console.log(e);
  }
};
