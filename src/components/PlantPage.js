import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((plantData) => setPlants(plantData))
  }, [])

  function handleAddPlant(newPlant){
    console.log(newPlant)
    setPlants([...plants, newPlant])
  }

  const visiblePlants = plants.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search setSearchInput={setSearchInput} />
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;
