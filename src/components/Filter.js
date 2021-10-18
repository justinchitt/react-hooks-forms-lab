import React from "react";

function Filter({ onCategoryChange, onSearchChange, items }) {
  return (
    <div className="Filter">
      <input onChange={onSearchChange} type="text" name="search" placeholder="Search..." value={items.name}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
