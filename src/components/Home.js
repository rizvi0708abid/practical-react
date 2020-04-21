import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestProducts } from "../actions/actions";
import ProductCard from "./Card";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import { Button } from "@material-ui/core";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePrev: false,
      pageNumber: 1,
    };
  }
  componentDidMount() {
    console.log("props...", this.props);
    const { pageNumber, pageSize } = this.props;
    this.props.requestProducts(pageNumber, pageSize);
  }

  handleNext = () => {
    const { pageNumber, pageSize } = this.props;
    console.log("pageNumber :: ", pageNumber);
    if (pageNumber >= 1) {
      this.props.requestProducts(pageNumber + 1, pageSize);
      this.setState({
        activePrev: false,
      });
    }
  };

  handlePrev = () => {
    const { pageNumber, pageSize } = this.props;
    console.log("pageNumber :: ", pageNumber);
    if (pageNumber >= 2) {
      this.props.requestProducts(pageNumber - 1, pageSize);
    } else {
      this.setState({
        activePrev: true,
      });
    }
  };

  product = (x) => {
    return x === undefined ? (
      <Skeleton variant="text" width={210} height={118} />
    ) : (
      <ProductCard prodDetails={x} />
    );
  };
  render() {
    let { products = [], loading, pageNumber } = this.props.products;
    return !loading ? (
      <div style={{ padding: 100 }}>
        <Grid
          container
          spacing={1}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {products.map(this.product)}
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <Button
            onClick={this.handlePrev}
            variant="contained"
            color="primary"
            disabled={this.state.activePrev}
            style={{ marginLeft: 10 }}
          >
            {`<< Prev`}
          </Button>
          <strong style={{ textDecoration: "underline" }}>
            {pageNumber > 0 ? pageNumber : null}
          </strong>
          <Button
            onClick={this.handleNext}
            variant="contained"
            color="primary"
            style={{ marginRight: 90 }}
          >
            {`Next >>`}
          </Button>
        </div>
      </div>
    ) : (
      <Skeleton
        variant="text"
        animation="wave"
        width="100%"
        height={118}
        style={{ textAlign: "center" }}
      >
        <strong>Loading ...</strong>
      </Skeleton>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    pageNumber: state.productReducer.pageNumber,
    pageSize: state.productReducer.pageSize,
    error: state.productReducer.error,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
