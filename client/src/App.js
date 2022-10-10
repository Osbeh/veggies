import { useState, useEffect } from "react";
import Header from "./components/Header"
import Cards from "./components/Cards";
import AddVeggie from "./components/AddVeggie"
import Card from "./components/Card";
import Opponent from "./components/Opponent";
import './App.css';

function App() {
  const [vegSelected, setVegSelected] = useState(false) ;
  const [veggies, setVeggies] = useState([])
  const [player, setPlayer] = useState({})
  const [enemy, setEnemy] = useState({})
  const [admin, setAdmin] = useState(false)

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
    if (!vegSelected) {
      setPlayer(veggies.filter((veggie) => veggie.id === id)[0])
      setVeggies(veggies.filter((veggie) => veggie.id !== id))
    } else {
      const getVeggies = async () => {
        const vegsFromServer = await fetchVeggies()
        setVeggies(vegsFromServer)
      }
      getVeggies()
    }
    setVegSelected(!vegSelected)
  }

  const selectEnemy = (id) => {
    setEnemy(veggies.filter((veggie) => veggie.id === id)[0])
    setVeggies(veggies.filter((veggie) => veggie.id !== id))
  }

  const addVeggie = async (veggie) => {
    console.log(veggie)
  }

  // console.log(veggies)

  return (
    <div className="Container">
      <Header></Header>
      {/* {vegSelected ? <Card veggie={player} onSelect={onSelect}/> : <Cards veggies={veggies} onSelect={onSelect}/>} */}
      {vegSelected ? <Opponent player={player} enemies={veggies} enemy={enemy} onSelect={onSelect} selectEnemy={selectEnemy}/>:<Cards veggies={veggies} onSelect={onSelect}/>}
      {admin && <AddVeggie onAdd={addVeggie}/>}
    </div>
  )
}


export default App;
