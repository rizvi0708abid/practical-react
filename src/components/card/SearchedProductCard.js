import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Modal } from "@material-ui/core";

import SearchedProductForm from "../productForm/SearchedProductForm";

const modal = {
  width: 600,
  height: 400,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  marginLeft: "30%",
  marginTop: "10%",
  backgroundColor: "white",
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const cardStyle = {
  display: "block",
  width: "20vw",
  transitionDuration: "0.3s",
  height: "40vw",
  margin: "3px",
};

export default function SearchedProductCard(props) {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  const loading = useSelector((state) => {
    console.log(state);
    return state.searchedProductReducer.loading;
  });

  useEffect(() => {}, [props]);
  const {
    productId,
    productImage,
    productName,
    shortDescription,
    reviewRating,
    reviewCount,
    price,
    inStock,
  } = props.prodDetails;

  console.log("ProductCard....::", props.propDetails);

  const handler = () => {
    setShowForm(false);
  };

  return showForm ? (
    <Modal open={showForm} style={modal}>
      <SearchedProductForm id={productId} showFormHandler={handler} />
    </Modal>
  ) : loading ? (
    "Loading"
  ) : (
    <Grid item xs={12} sm={4}>
      <Card style={cardStyle} className={classes.root}>
        <MoreHorizIcon
          style={{ marginLeft: 230 }}
          onClick={() => {
            setShowForm(!showForm);
          }}
        />

        <Link to={`/app/${productId}`} style={{ textDecoration: "none" }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {productName ? productName.substring(0, 2) : ""}
              </Avatar>
            }
            title={props.prodDetails.productName}
          />
          <CardMedia
            className={classes.media}
            image={`https://mobile-tha-server-8ba57.firebaseapp.com${productImage}`}
          />
        </Link>
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Rating name="read-only" value={reviewRating} readOnly />
              <label>{`reviews(${reviewCount})`}</label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                InStock:
                {inStock ? (
                  <CheckIcon style={{ color: "green" }} />
                ) : (
                  <CloseIcon style={{ color: "red" }} />
                )}
              </div>
            </div>
            <strong>{price}</strong>
          </div>
          <hr />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
          >
            <strong> Description :</strong>
            {shortDescription !== undefined
              ? shortDescription.replace(/(<([^>]+)>)/gi, "")
              : ""}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
