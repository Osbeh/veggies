import { useState, useEffect } from "react";
import Button from "./components/Button";
import Header from "./components/Header"
import Cards from "./components/Cards";

function App() {
  const [vegSelected, setVegSelected] = useState(false) ;
  const [veggies, setVeggies] = useState([])

  useEffect(() => {
    const getVeggies = async () => {
      const vegsFromServer = await fetchVeggies()
      setVeggies(vegsFromServer)
    }
    getVeggies()
    
  }, [])

  const fetchVeggies = async () => {
    const res = await fetch('http://localhost:5000/veggies')
    const data = await res.json()
    return data
  }

  const onSelect = (id) => {
    if (!vegSelected) setVeggies(veggies.filter((veggie) => veggie.id === id));
    setVegSelected(!vegSelected)
  }

  console.log(veggies)

  return (
    <div className="Container">
      <Header></Header>
      <Cards veggies={veggies} onSelect={onSelect}/>
    </div>
  )
}


export default App;
