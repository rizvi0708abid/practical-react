import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import Header from "../header";

import OutOfStock from "../../../src/images/outOfStock.jpeg";

const listStyle = {
  listStyleType: "none",
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 100,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1000,
  },
  image: {
    width: 328,
    height: 328,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function SearchedProductDetails({ product, history }) {
  const classes = useStyles();
  if (product === undefined) return <Link to="/app">Go to products</Link>;
  console.log("history....::", history);
  const {
    productId,
    productName,
    shortDescription,
    price,
    productImage,
    inStock,
    reviewCount,
    reviewRating,
  } = product;
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  style={!inStock ? { textDecoration: "line-through" } : null}
                  className={classes.img}
                  alt="productImage"
                  src={
                    inStock
                      ? `https://mobile-tha-server-8ba57.firebaseapp.com${productImage}`
                      : OutOfStock
                  }
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <ul>
                <li style={listStyle}>
                  <h3 style={{ textDecoration: "underline" }}>
                    Product Details
                  </h3>
                </li>
                <li style={listStyle}>
                  <Typography gutterBottom variant="subtitle1">
                    <strong>ProductId:</strong> {productId}
                  </Typography>
                </li>
                <li style={listStyle}>
                  <Typography gutterBottom variant="subtitle1">
                    <strong>ProductName:</strong> {productName}
                  </Typography>
                </li>
                <li style={listStyle}>
                  <Typography variant="body2" gutterBottom>
                    <strong>Description:</strong>{" "}
                    {shortDescription !== undefined
                      ? shortDescription.replace(/(<([^>]+)>)/gi, "")
                      : ""}
                  </Typography>
                </li>
                <li style={listStyle}>
                  <Typography>
                    <strong>Rating:</strong>{" "}
                    <Rating name="read-only" value={reviewRating} readOnly />
                  </Typography>
                </li>
                <li style={listStyle}>
                  <Typography>
                    <strong>Reviews:</strong> : {`(${reviewCount})`}
                  </Typography>
                </li>
                <li style={listStyle}>
                  <Typography variant="subtitle1">
                    <strong>Price:</strong> {price}
                  </Typography>
                </li>
                <li style={listStyle}>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <strong>InStock:</strong>{" "}
                    {inStock ? (
                      <label style={{ color: "green" }}>In Stock</label>
                    ) : (
                      <label style={{ color: "red" }}>Out of Stock</label>
                    )}
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
          <button
            style={{ marginLeft: 385 }}
            onClick={() => history.push("/app")}
          >{`<<Back`}</button>
        </Paper>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: _.find(state.searchedProductReducer.products.products, {
      productId: ownProps.match.params.id,
    }),
    history: ownProps.history,
  };
};

export default connect(mapStateToProps)(SearchedProductDetails);
