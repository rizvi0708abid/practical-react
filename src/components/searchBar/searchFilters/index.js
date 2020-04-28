import React, { useState } from "react";

const Filter = ({ filtersFunc }) => {
  const [form, setForm] = useState({
    inStock: false,
    maxPrice: "",
    minPrice: "",
    maxReviewRating: "",
    minReviewRating: "",
    maxReviewCount: "",
    minReviewCount: "",
  });

  const ratings = ["0", "1", "2", "3", "4", "5"];
  const price = [
    "0",
    "100",
    "500",
    "1000",
    "1200",
    "1500",
    "2000",
    "2500",
    "3000",
  ];

  const reviewCounts = [
    "0",
    "100",
    "500",
    "1000",
    "1500",
    "2000",
    "3000",
    "5000",
    "10000",
    "15000",
    "30000",
  ];

  const updateField = (e) => {
    if (e.target.name === "inStock") {
      console.log("Inside update fields", e.target.name, e.target.vale);
      setForm({
        ...form,
        [e.target.name]: !form.inStock,
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }

    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filtersFunc(form);
    console.log("filtersFunc called...");
    alert(JSON.stringify(form));
  };

  return (
    <div>
      <h3>Search Filters</h3>
      <form onSubmit={handleSubmit}>
        <label>
          inStock:
          <input
            value={form.inStock}
            type="checkbox"
            name="inStock"
            defaultChecked={form.checked}
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          MinPrice:
          <select name="minPrice" value={form.minPrice} onChange={updateField}>
            {price.map((prc) => (
              <option value={prc}>{prc}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          MaxPrice:
          <select name="maxPrice" value={form.maxPrice} onChange={updateField}>
            {price.map((prc) => (
              <option value={prc}>{prc}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          MinReviewRating:
          <select
            name="minReviewRating"
            value={form.minReviewRating}
            onChange={updateField}
          >
            {ratings.map((rating) => (
              <option value={rating}>{rating}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          MaxReviewRating:
          <select
            name="maxReviewRating"
            value={form.maxReviewRating}
            onChange={updateField}
          >
            {ratings.map((rating) => (
              <option value={rating}>{rating}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          MinReviewCount:
          <select
            name="minReviewCount"
            value={form.minReviewCount}
            onChange={updateField}
          >
            {reviewCounts.map((count) => (
              <option value={count}>{count}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          MaxReviewCount:
          <select
            name="maxReviewCount"
            value={form.maxReviewCount}
            onChange={updateField}
          >
            {reviewCounts.map((count) => (
              <option value={count}>{count}</option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default Filter;
