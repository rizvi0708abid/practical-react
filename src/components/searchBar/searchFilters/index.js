import React, { useState } from "react";

const checkboxes = [
  {
    name: "inStock",
    key: "inStock",
    label: "inStock",
  },
  {
    name: "Rating",
    key: "rating",
    label: "Rating",
  },
  {
    name: "Review",
    key: "review",
    label: "Review",
  },
  {
    name: "Price",
    key: "price",
    label: "Price",
  },
];

const Filter = ({ searchFilter }) => {
  const [checkedItems, setCheckedItems] = useState(new Map());

  const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );

  const handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems(checkedItems.set(item, isChecked));
  };
  return (
    <div>
      <h3>Search Filters</h3>
      {checkboxes.map((item) => (
        <label key={item.key}>
          {item.name}
          <Checkbox
            name={item.name}
            checked={checkedItems.get(item.name)}
            onChange={handleChange}
          />
          <br />
        </label>
      ))}
    </div>
  );
};

export default Filter;
