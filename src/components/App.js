import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onSearchChange(e) {
    e.preventDefault()
    setItems(items.filter(item => item.name.includes(e.target.value)))
  }

  function onItemFormSubmit(newItem) {
    console.log(newItem)
    setItems([...items, newItem])
    }


  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onSearchChange={onSearchChange} onItemFormSubmit={onItemFormSubmit}/>
    </div>
  );
}

export default App;
