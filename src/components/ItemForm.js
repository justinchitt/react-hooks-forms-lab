import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [name, setName] = useState("")
  const [type, setType] = useState("Produce")
  

  function handleSubmit(e) {
    e.preventDefault()
    const newItem ={
      id: uuid(),
      name: name,
      category: type
    }
    onItemFormSubmit(newItem)
  }


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={e => setName(e.target.value)} type="text" name="name" value={name}/>
      </label>

      <label>
        Category:
        <select onChange={e => setType(e.target.value)} name="category" value={type}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
