import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./searchFilters";
import { requestSearchedProducts } from "../../actions/actions";
import Skeleton from "@material-ui/lab/Skeleton";
import ProductCard from "../card";
import Grid from "@material-ui/core/Grid";

const searchStyle = {
  width: "80%",
  marginLeft: 300,
  padding: "20px",
  background: "#f0e68c",
};
const SearchBar = () => {
  const [activePrev, setActivePrev] = useState(false);
  const [showForm, setShowForm] = useState(false);
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

  const showProducts = (product) => {
    return product === undefined ? (
      <Skeleton variant="text" width={710} height={218} />
    ) : (
      <ProductCard key={product.productId} prodDetails={product} />
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
          {<Filter searchFilter={search} />}
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
