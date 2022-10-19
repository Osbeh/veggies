import { useState, useEffect } from "react";
import Header from "./components/Header"
import AddVeggie from "./components/AddVeggie"
import Action from "./components/Action";
import './App.css';
import Game from "./components/Game"
import Footer from "./components/Footer";

function App() {
  const [vegSelected, setVegSelected] = useState(false) ;
  const [veggies, setVeggies] = useState([])
  const [player, setPlayer] = useState({})
  const [enemy, setEnemy] = useState({})
  const [enemySelected, setEnemySelected] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [gameReady, setGameReady] = useState(false)
  const [defeatedEnemies, setDefeatedEnemies] = useState([])
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
      setDefeatedEnemies([])
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


  const resetGame = (winner) => {
    
    setEnemySelected(false)
    setGameReady(false)
    if (player.id !== winner.id) {
      setVegSelected(false)
      const getVeggies = async () => {
        const vegsFromServer = await fetchVeggies()
        setVeggies(vegsFromServer)
      }
      getVeggies()
      setEnemy({})
      setDefeatedEnemies([])
    } else {
      setDefeatedEnemies([...defeatedEnemies, enemy])
      setEnemy({})
    }
    
  }

  return (
    <div className="Container">
      <Header></Header>
      {!gameReady ? <Game veggies={veggies} vegSelected={vegSelected} player={player} onSelect={onSelect} enemySelected={enemySelected} enemy={enemy} selectEnemy={selectEnemy} setGame={setGame} gameReady={gameReady}></Game>
      :  <Action player={player} enemy={enemy} resetGame={resetGame}></Action>
    }
      <Footer defeatedEnemies={defeatedEnemies}></Footer>
      {admin && <AddVeggie onAdd={addVeggie}/>}
    </div>
  )
}


export default App;
