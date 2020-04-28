import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./searchFilters";
import { requestSearchedProducts } from "../../actions/actions";
import Skeleton from "@material-ui/lab/Skeleton";
import SearchedProductCard from "../card/SearchedProductCard";
import SearchedProductForm from "../productForm/SearchedProductForm";
import Grid from "@material-ui/core/Grid";

import "./searchBar.css";

const searchStyle = {
  width: "80%",
  marginLeft: 300,
  padding: "20px",
  background: "#f0e68c",
};
const SearchBar = () => {
  const [activePrev, setActivePrev] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState("");

  const loading = useSelector((state) => {
    console.log(state);
    return state.searchedProductReducer.loading;
  });
  const products = useSelector(
    (state) => state.searchedProductReducer.products.products
  );

  const pageNumber = useSelector(
    (state) => state.searchedProductReducer.pageNumber
  );

  const pageSize = useSelector(
    (state) => state.searchedProductReducer.pageSize
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestSearchedProducts(pageNumber, pageSize, search));
  }, []);

  const handleSearch = async (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestSearchedProducts(pageNumber, pageSize, search));
  };

  const handleNext = () => {
    console.log("pageNumber :: ", pageNumber);
    if (pageNumber >= 1) {
      dispatch(requestSearchedProducts(pageNumber + 1, pageSize, search));
      setActivePrev(false);
    }
  };

  const handlePrev = () => {
    console.log("pageNumber :: ", pageNumber);
    if (pageNumber >= 2) {
      dispatch(requestSearchedProducts(pageNumber - 1, pageSize, search));
    } else {
      setActivePrev(true);
    }
  };

  const myCallBack = (dataFromChild) => {
    console.log("dataFromChild......", dataFromChild);
    this.setState({ showForm: dataFromChild });
  };

  const getFiltersCallback = (data) => {
    let filterString = "?";
    console.log("dataFromFilterComponents......", data);
    setFilters({ ...filters, data });
    if (data && data !== undefined) {
      if (data.inStock !== "") {
        filterString = filterString.concat("inStock=" + data.inStock);
      }
      if (data.minPrice !== "" && data.minPrice !== "0") {
        filterString = filterString.concat("&minPrice=" + data.minPrice);
      }
      if (data.maxPrice !== "" && data.maxPrice !== "0") {
        filterString = filterString.concat("&maxPrice=" + data.maxPrice);
      }
      if (data.minReviewRating !== "" && data.minReviewRating !== "0") {
        filterString = filterString.concat(
          "&minReviewRating=" + data.minReviewRating
        );
      }
      if (data.maxReviewRating !== "" && data.minReviewRating !== "0") {
        filterString = filterString.concat("&minPrice=" + data.minPrice);
      }
      if (data.maxReviewRating !== "" && data.maxReviewRating !== "0") {
        filterString = filterString.concat(
          "&maxReviewRating=" + data.maxReviewRating
        );
      }
      if (data.maxReviewCount !== "" && data.maxReviewCount !== "0") {
        filterString = filterString.concat(
          "&maxReviewCount=" + data.maxReviewCount
        );
      }
      if (data.minReviewCount !== "" && data.minReviewCount !== "0") {
        filterString = filterString.concat(
          "&minReviewCount=" + data.minReviewCount
        );
      }
    }
    console.log("final filter string ...", filterString);
    dispatch(requestSearchedProducts(1, pageSize, filterString));
  };

  const showProducts = (product) => {
    return product === undefined ? (
      <Skeleton variant="text" width={710} height={218} />
    ) : (
      <SearchedProductCard
        key={product.productId}
        prodDetails={product}
        callBack={myCallBack}
      />
    );
  };

  return (
    <div>
      <div style={{ marginLeft: 200, marginRight: 200, paddingBottom: 40 }}>
        <form onSubmit={handleSubmit} id="searchForm">
          <input
            type="text"
            className="searchForm"
            name="search"
            placeholder="Search Products ..."
            onChange={handleSearch}
          />
          <button type="submit" className="searchButton">
            Search
          </button>
        </form>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "20%",
            float: "left",
            border: "1px #ccc solid",
            paddingLeft: 10,
          }}
        >
          {<Filter searchFilter={search} filtersFunc={getFiltersCallback} />}
        </div>

        <div
          style={{
            width: "80%",
            float: "right",
            border: "1px #ccc solid",
            paddingLeft: 10,
          }}
        >
          {!loading ? (
            <div style={{ padding: 100 }}>
              {showForm ? <SearchedProductForm /> : null}
              <Grid
                container
                spacing={1}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {products === undefined
                  ? "Loading"
                  : products.length === 0
                  ? "No products found..."
                  : products.map((product) => showProducts(product))}
              </Grid>
            </div>
          ) : (
            <Skeleton variant="text" width={700} height={300} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
