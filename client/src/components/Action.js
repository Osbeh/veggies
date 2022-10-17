import { useEffect, useState } from "react"
import useInterval from 'react-useinterval'

export default function Action ({player, enemy }) {

    // const [playerHealth, setPlayerHealth] = useState(player.energyKcal)
    const [enemyHealth, setEnemyHealth] = useState(enemy.energyKcal)
    const [playerHealth, setPlayerHealth] = useState(100)
    //const [enemyHealth, setEnemyHealth] = useState(100)
    const [gameFinished, setGameFinished] = useState(false)


    // const plAction = () => {
    const playerAttackTimer = player.fat*10000
    const enemyAttackTimer = enemy.fat*10000
        
    //const playerAttack = player.carbohydrate
    //const enemyAttack = enemy.carbohydrate


    const playerAttack = playerAttack => {
        if (enemyHealth < 0 ) {
            setGameFinished(true)
        } else {
            setEnemyHealth(enemyHealth - playerAttack);
        }
    };

    const enemyAttack = enemyAttack => {
        if (playerHealth < 0 ) {
            setGameFinished(true)
        } else {
            setPlayerHealth(playerHealth - enemyAttack)
        }
    }

    useInterval(playerAttack, gameFinished? null : playerAttackTimer, player.carbohydrate);

    useInterval(enemyAttack, gameFinished? null : enemyAttackTimer, enemy.carbohydrate )
    
     
    return (

        <div>
            Game happens now 
           <div> <p>Player Health: {playerHealth}</p> <p>Enemy Health: {enemyHealth}</p> </div>
           {gameFinished && playerHealth < 0 ? 'You loose' : 'You Win'}
        </div>
    )
}