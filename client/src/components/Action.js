import { useState } from "react"
import { act } from "react-dom/test-utils"
import useInterval from 'react-useinterval'
import HealthBar from "./HealthBar"
import ActionLog from "./ActionLog"

export default function Action ({ player, enemy, resetGame }) {


    const [enemyHealth, setEnemyHealth] = useState(enemy.energyKcal)
    const [playerHealth, setPlayerHealth] = useState(player.energyKcal)
    const [gameFinished, setGameFinished] = useState(false)
    const [winner, setWinner] = useState({})
    const [actionLog, setActionLog] = useState([])
    //TODO: CREATE A NEW STATE FOR ACTION LOG

    const playerAttackTimer = (player.fat + player.protein + player.carbohydrate)*100
    const enemyAttackTimer = (enemy.fat + enemy.protein + enemy.carbohydrate)*100
        
    const playerAttack = () => {
        let playerDamage = player.carbohydrate * (Math.random()+0.5)
        let enemyDef = Math.random() * enemy.protein
        setActionLog([...actionLog, {attacker: player.name, damage:playerDamage, defender: enemy.name, block:enemyDef}])
        let totalDmg = playerDamage - enemyDef
        if (totalDmg < 0 ) totalDmg = 0.1
        if (totalDmg > enemyHealth) {
            setEnemyHealth(0)
            setGameFinished(true)
            setWinner(player)
        } else {
            setEnemyHealth(enemyHealth - totalDmg);
        }
    };

    const enemyAttack = () => {
        let enemyDamage = enemy.carbohydrate * (Math.random() +0.5)
        let playerDef = Math.random() * enemy.protein;
        setActionLog([...actionLog, {attacker: enemy.name, damage:enemyDamage, defender: player.name, block:playerDef}])
        let totalDmg = enemyDamage - playerDef
        if (totalDmg < 0 ) totalDmg = 0.1
        if (totalDmg > playerHealth) {
            setPlayerHealth(0)
            setGameFinished(true)
            setWinner(enemy)
        } else {
            setPlayerHealth(playerHealth - totalDmg)
        }
    }

    useInterval(playerAttack, gameFinished? null : playerAttackTimer);

    useInterval(enemyAttack, gameFinished? null : enemyAttackTimer);
    
     
    return (

        <div className='action'>
            <h3 className='matchHeader'>{gameFinished ? 'Fight end' : 'Fight!'}</h3>
           <div className='healthBars'>
                <HealthBar vegName={player.name} currentHealth={playerHealth} maxHealth={player.energyKcal}/>
                <HealthBar vegName={enemy.name} currentHealth={enemyHealth} maxHealth={enemy.energyKcal}/>
                {/* <p>Player Health: {Math.round(playerHealth * 10) / 10}</p> <progress value={playerHealth} max={player.energyKcal}></progress> */}
                {/* <p>Enemy Health: {Math.round(enemyHealth * 10) / 10}</p> <progress value={enemyHealth} max={enemy.energyKcal}></progress> */}
            </div>
            {winner.name && <div className='winnerDiv'><p>{winner.name} wins!</p> 
                <button onClick={() => resetGame(winner)}>{winner.id === player.id ? 'Continue' : 'Restart'}</button>
           </div>}
            <div className='actionLog'>
                {/* <ActionLog log={actionLog}></ActionLog> */}
                {actionLog.map((logEntry, index) => (
                    <ActionLog key={index} logEntry={logEntry}/>
                )
                )}
            </div>
           
           
        </div>
    )
}