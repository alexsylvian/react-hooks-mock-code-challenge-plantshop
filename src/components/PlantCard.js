import React, { useState } from "react";

function PlantCard({ name, price, image }) {
  const [stock, setStock] = useState(true)

  function handleClick(){
    if (stock === true) {
      setStock(false)
    } else {
      setStock(true)
    }
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
