import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class ProductForm extends Component {
  //   mySubmit = (values) =>{

  //   }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="productName">ProductName</label>
          <Field name="productName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="shortDescription">Description</label>
          <Field name="shortDescription" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Field name="price" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="reviewRating">Rating</label>
          <Field name="reviewRating" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="reviewCount">ReviewCount</label>
          <Field name="reviewCount" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="inStock">InStock</label>
          <Field name="inStock" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="productImage">ProductImage</label>
          <Field name="productImage" component="input" type="text" />
        </div>
      </form>
    );
  }
}

ProductForm = reduxForm({ form: "Product" })(ProductForm);
export default ProductForm;
