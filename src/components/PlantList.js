import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((plantData) => setPlants(plantData))
  }, [])

  const listOfPlants = plants.map(plant =>(
    <PlantCard key={plant.id} name={plant.name} price={plant.price} image={plant.image} />
  ))

  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
