import { useState, useEffect } from "react";
import Button from "./components/Button";

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

  console.log(veggies)

  return (
    <div className="Container"> 
      {!vegSelected && <Button text={'Select'} onClick={()=> setVegSelected(!vegSelected)} />}
    </div>
  )
}


export default App;
