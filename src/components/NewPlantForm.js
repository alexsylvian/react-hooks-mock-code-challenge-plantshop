import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [plantInput, setPlantInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  const [priceInput, setPriceInput] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    const newPlantObj = {
      name:plantInput,
      image:imageInput,
      price:priceInput
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantObj),
  })
    .then(res => res.json())
    .then(resData => {
      onAddPlant(resData)
      console.log(resData)

      setPlantInput("")
      setImageInput("")
      setPriceInput("")
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantInput} onChange={(e) => setPlantInput(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={imageInput} onChange={(e) => setImageInput(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={priceInput} onChange={(e) => setPriceInput(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
