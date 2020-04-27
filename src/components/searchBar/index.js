import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Filter from "./searchFilters";
import { requestSearchedProducts } from "../../actions/actions";
import Skeleton from "@material-ui/lab/Skeleton";
import ProductCard from "../card";
//import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
//import ProductForm from "../../components/productForm";

const searchStyle = {
  width: "80%",
  marginLeft: 300,
  padding: "20px",
  background: "#f0e68c",
};
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [activePrev, setActivePrev] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);

  const loading = useSelector((state) => {
    console.log(state);
    return state.searchedProductReducer.loading;
  });
  const searchedProducts = useSelector(
    (state) => state.searchedProductReducer.products.products
  );
  const pageNumber = useSelector(
    (state) => state.searchedProductReducer.pageNumber
  );
  const pageSize = useSelector(
    (state) => state.searchedProductReducer.pageSize
  );

  const dispatch = useDispatch();
  let val = "";
  useEffect(() => {
    setProducts(searchedProducts);
    console.log("fhghjkl:::: search ", search, products);
  }, [search]);

  const handleSearch = (e) => {
    val = e.target.value;
  };

  const setSearchValue = (value) => {
    setTimeout(setSearch(value), 2000);
  };

  const fetchProductsSearched = async () => {
    await setSearchValue(val);
    await setTimeout(
      dispatch(requestSearchedProducts(pageNumber, pageSize, search)),
      1000
    );
    setProducts(searchedProducts);
    console.log("state ....searched XXX products::::", products);
    console.log(loading);
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
        <TextField
          label="search products"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
          onChange={handleSearch}
          onClick={() => fetchProductsSearched()}
        />
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
