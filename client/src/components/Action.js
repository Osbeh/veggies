import { useState } from "react"
import useInterval from 'react-useinterval'
import HealthBar from "./HealthBar"
import ActionLog from "./ActionLog"

export default function Action ({ player, enemy, resetGame }) {

    const [enemyHealth, setEnemyHealth] = useState(enemy.energyKcal)
    const [playerHealth, setPlayerHealth] = useState(player.energyKcal)
    const [gameFinished, setGameFinished] = useState(false)
    const [winner, setWinner] = useState({})
    const [actionLog, setActionLog] = useState([])

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

    if (gameFinished && enemy.vegType === 'boss') {
        return (
            <div className='gameEnd'>
                {winner.id === player.id ? <p>Onneksi olkoon, voitit pelin!</p>: <p>Päävastus oli liian kova pala purtavaksi.</p>}
            </div>
        )
    }
    
    return (
        <div className='action'>
            <h3 className='matchHeader'>{gameFinished ? 'Taistelu taantui' : 'Taistele!'}</h3>
           <div className='healthBars'>
                <HealthBar vegName={player.name} currentHealth={playerHealth} maxHealth={player.energyKcal}/>
                <HealthBar vegName={enemy.name} currentHealth={enemyHealth} maxHealth={enemy.energyKcal}/>
          </div>
            {winner.name && <div className='winnerDiv'><p>{winner.name} voittaa!</p> 
               {enemy.vegType !== 'boss' && <button onClick={() => resetGame(winner)}>{winner.id === player.id ? 'Jatka' : 'Yritä uudestaan'}</button>}
           </div>}
            <div className='actionLog'>
                {actionLog.map((logEntry, index) => (
                    <ActionLog key={index} logEntry={logEntry}/>
                )
                )}
            </div>
        </div>
    )
}