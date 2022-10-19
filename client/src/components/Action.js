import { useState } from "react"
import useInterval from 'react-useinterval'

export default function Action ({ player, enemy, resetGame }) {

    const [enemyHealth, setEnemyHealth] = useState(enemy.energyKcal)
    const [playerHealth, setPlayerHealth] = useState(player.energyKcal)
    const [gameFinished, setGameFinished] = useState(false)
    const [winner, setWinner] = useState({})
    //TODO: CREATE A NEW STATE FOR ACTION LOG

    const playerAttackTimer = (player.fat + player.protein + player.carbohydrate)*100
    const enemyAttackTimer = (enemy.fat + enemy.protein + enemy.carbohydrate)*100
        
    const playerAttack = () => {
        let playerDamage = player.carbohydrate * (Math.random()+0.5)
        console.log(`${player.name} hits for ${playerDamage}`)
        let enemyDef = Math.random() * enemy.protein
        console.log(`${enemy.name} blocks ${enemyDef} damage`)
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
        console.log(`${enemy.name} hits for ${enemyDamage}`)
        let playerDef = Math.random() * enemy.protein;
        console.log(`${player.name} blocks ${playerDef} damage`)
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
                <p>Player Health: {Math.round(playerHealth * 10) / 10}</p> <progress value={playerHealth} max={player.energyKcal}></progress>
                <p>Enemy Health: {Math.round(enemyHealth * 10) / 10}</p> <progress value={enemyHealth} max={enemy.energyKcal}></progress>
            </div>
           {winner.name && <div className='winnerDiv'><p>{winner.name} wins!</p> 
                <button onClick={() => resetGame(winner)}>{winner.id === player.id ? 'Continue' : 'Restart'}</button>
           </div>}
           <div className='actionLog'></div>
        </div>
    )
}