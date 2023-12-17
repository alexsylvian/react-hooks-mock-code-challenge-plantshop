import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const listOfPlants = plants.map(plant =>(
    <PlantCard key={plant.id} name={plant.name} price={plant.price} image={plant.image} />
  ))

  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
