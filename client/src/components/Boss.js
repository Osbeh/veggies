import { useEffect, useState } from "react"
import Button from "./Button"

export default function Boss({ setBossEnemy }) {

    const [boss, setBoss] = useState({})

    const setReady = () => {
        setBossEnemy(boss)
    }

    useEffect(() => {
        const getBoss = async () => {
            const bossFromServer = await fetchBoss()
            setBoss(bossFromServer)
          }
          getBoss()
    }, [])

    const fetchBoss = async () => {
        try {
          const res = await fetch(`/fruits/30572`)
          const data = await res.json()
          return data
        } catch (err) {
          console.error('err', err)
          return
        }
      }

    return (
        <div className="finalBattlePrep">
            <p>Onneksi olkoon! Päihitit kaikki vastustajasi, mutta vielä on yksi...</p>
            <Button text={'valmis'} onClick={setReady}></Button>
        </div>
    )
}