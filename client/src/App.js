import { useState, useEffect } from "react";
import Header from "./components/Header"
import AddVeggie from "./components/AddVeggie"
import Action from "./components/Action";
import './App.css';
import Game from "./components/Game"

function App() {
  const [vegSelected, setVegSelected] = useState(false) ;
  const [veggies, setVeggies] = useState([])
  const [player, setPlayer] = useState({})
  const [enemy, setEnemy] = useState({})
  const [enemySelected, setEnemySelected] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [gameReady, setGameReady] = useState(false)
  // const [gameFinished, setGameFinished] = useState(false)

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
    if (!enemySelected) {
      setEnemy(veggies.filter((veggie) => veggie.id === id)[0])
      setVeggies(veggies.filter((veggie) => veggie.id !== id))
    } else {
      setVeggies(...veggies, enemy)
      setEnemy({})
    }
    setEnemySelected(!enemySelected)
  }

  const setGame = () => {
    setGameReady(!gameReady)
  }

  // const gameEnded = () => setGameFinished(!gameFinished)

  const addVeggie = async (veggie) => {
    console.log(veggie)
  }

  console.log(veggies)
  console.log(enemySelected)

  // if (!vegSelected) {
  //   return (
  //     <Cards veggies={veggies} onSelect={onSelect}/>
  //   )
  // }

  return (
    <div className="Container">
      <Header></Header>
      {!gameReady ? <Game veggies={veggies} vegSelected={vegSelected} player={player} onSelect={onSelect} enemySelected={enemySelected} enemy={enemy} selectEnemy={selectEnemy} setGame={setGame} gameReady={gameReady}></Game>
      :  <Action player={player} enemy={enemy} ></Action>
    }
      
      {admin && <AddVeggie onAdd={addVeggie}/>}
    </div>
  )
}


export default App;
