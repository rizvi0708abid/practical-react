import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";

let SearchedProductForm = ({ product, showFormHandler }) => {
  console.log("ProductForm ...details", product);

  const [form, setState] = useState({
    productName: product !== undefined ? product.productName : "",
    price: product !== undefined ? product.price : "",
    shortDescription: product !== undefined ? product.shortDescription : "",
    reviewRating: product !== undefined ? product.reviewRating : "",
    reviewCount: product !== undefined ? product.reviewCount : "",
    inStock: product !== undefined ? product.inStock : "",
    productImage: product !== undefined ? product.productImage : "",
  });

  const printValues = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form));
    showFormHandler();
  };

  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={printValues}
      style={{ backgroundColor: "#394642", width: 400 }}
    >
      <label
        htmlFor="productDetails"
        style={{
          marginLeft: 80,
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Edit Product Details
      </label>
      <br />
      <br />
      <label htmlFor="productName" style={{ marginLeft: 80 }}>
        ProductName
      </label>
      <br />
      <textarea
        name="productName"
        value={form.productName}
        type="text"
        onChange={updateField}
        style={{ width: 250, height: 50, marginLeft: 80 }}
      />
      <br />

      <label htmlFor="shortDescription" style={{ marginLeft: 80 }}>
        Description
      </label>
      <br />
      <textarea
        name="shortDescription"
        value={form.shortDescription}
        type="text"
        onChange={updateField}
        style={{ width: 250, height: 50, marginLeft: 80 }}
      />
      <br />

      <label htmlFor="price" style={{ marginLeft: 80 }}>
        Price
      </label>
      <br />
      <input
        name="price"
        value={form.price}
        type="text"
        onChange={updateField}
        style={{ width: 250, height: 20, marginLeft: 80 }}
      />
      <br />

      <label htmlFor="reviewRating" style={{ marginLeft: 80 }}>
        Rating
      </label>
      <br />
      <input
        name="reviewRating"
        value={form.reviewRating}
        type="text"
        onChange={updateField}
        style={{ width: 250, height: 20, marginLeft: 80 }}
      />
      <br />

      <label htmlFor="reviewCount" style={{ marginLeft: 80 }}>
        ReviewCount
      </label>
      <br />
      <input
        name="reviewCount"
        value={form.reviewCount}
        type="text"
        onChange={updateField}
        style={{ width: 250, height: 20, marginLeft: 80 }}
      />
      <br />

      <label htmlFor="inStock" style={{ marginLeft: 80 }}>
        InStock
      </label>
      <br />
      <input
        name="inStock"
        value={form.inStock}
        type="text"
        onChange={updateField}
        style={{ width: 250, height: 20, marginLeft: 80 }}
      />
      <br />

      <label htmlFor="productImage" style={{ marginLeft: 80 }}>
        ProductImage
      </label>
      <br />
      <textarea
        name="productImage"
        value={form.productImage}
        type="text"
        style={{ width: 250, height: 50, marginLeft: 80 }}
      />
      <br />
      <br />

      <button type="submit" style={{ marginLeft: 180, marginBottom: 15 }}>
        Submit
      </button>
    </form>
  );
};

SearchedProductForm = connect((state, ownProps) => ({
  product: _.find(state.searchedProductReducer.products.products, {
    productId: ownProps.id,
  }),
}))(SearchedProductForm);
export default SearchedProductForm;
