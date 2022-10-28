import { useState, useEffect } from "react";
import Header from "./components/Header"
import AddVeggie from "./components/AddVeggie"
import Action from "./components/Action";
import './App.css';
import Game from "./components/Game"
import Footer from "./components/Footer";
import SelectVegType from "./components/SelectVegType";

function App() {
  const [vegType, setVegType] = useState()
  const [vegSelected, setVegSelected] = useState(false) ;
  const [veggies, setVeggies] = useState([])
  const [player, setPlayer] = useState({})
  const [enemy, setEnemy] = useState({})
  const [enemySelected, setEnemySelected] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [gameReady, setGameReady] = useState(false)
  const [defeatedEnemies, setDefeatedEnemies] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)

  useEffect(() => {
    const getVeggies = async () => {
      try {
        const vegsFromServer = await fetchVeggies(vegType||'vegetables')
        if (vegsFromServer) {
          setVeggies(vegsFromServer)
          setErr(false)
        } else {
          setErr(true)
        }
        setLoading(false)
      } catch (err) {
        console.error(err)
        setErr(true)
      }
    }
    getVeggies()
  }, [vegType])

  const fetchVeggies = async (vegType) => {
    try {
      const res = await fetch(`http://localhost:4000/${vegType}`)
      const data = await res.json()
      return data
    } catch (err) {
      console.error('err', err)
      return
    }
  }

  if (loading) {
    return <div>Lataa...</div>
  }

  const onTypeSelect = (type) => {
    setVegType(type)
  }

  const onTypeChange = () => {
    setVegType('')
    setVegSelected(false)
    setPlayer({})
    setEnemy({})
    setEnemySelected(false)
    setGameReady(false)
    setDefeatedEnemies([])
  }

  const onAdmin = () => {
    setAdmin(!admin)
  }

  const onSelect = (id) => {
    if (!vegSelected) {
      setPlayer(veggies.filter((veggie) => veggie.id === id)[0])
      setVeggies(veggies.filter((veggie) => veggie.id !== id))
      setDefeatedEnemies([])
    } else {
      const getVeggies = async () => {
        const vegsFromServer = await fetchVeggies(vegType)
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

  const setBossEnemy = (boss) => {
    setEnemy(boss)
    setEnemySelected(true)
    setGameReady(true)
  }


  const resetGame = (winner) => {
    
    setEnemySelected(false)
    setGameReady(false)
    if (player.id !== winner.id) {
      setVegSelected(false)
      const getVeggies = async () => {
        const vegsFromServer = await fetchVeggies(vegType)
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

  if (err) {
    return (
      <div>Virhe haettaessa tietoja</div>
    )
  }

  if (!vegType) {
    return (
      <SelectVegType onTypeSelect={onTypeSelect} onAdmin={onAdmin} admin={admin}/>
    )
  }

  return (
    <div className="Container">
      <Header vegType={vegType} onTypeChange={onTypeChange} onAdmin={onAdmin}></Header>
      {!gameReady ? <Game veggies={veggies} vegSelected={vegSelected} player={player} onSelect={onSelect} enemySelected={enemySelected} enemy={enemy} selectEnemy={selectEnemy} setGame={setGame} gameReady={gameReady} setBossEnemy={setBossEnemy}></Game>
      :  <Action player={player} enemy={enemy} resetGame={resetGame}></Action>
    }
      {defeatedEnemies.length >= 1 && <Footer defeatedEnemies={defeatedEnemies}></Footer>}
      {admin && <AddVeggie />}
    </div>
  )
}

export default App;
