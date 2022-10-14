import { useState } from "react"

export default function Action ({player, enemy, gameFinished, gameEnded }) {

    const [playerHealth, setPlayerHealth] = useState(player.energyKcal)
    const [enemyHealth, setEnemyHealth] = useState(enemy.energyKcal)



    // const plAction = () => {
    let attackTimer = player.fat*10000
        
    //     // const map = {}

    //     const attackEnemy = () => {
    //         if (enemyHealth > 0) {
    //             // let newEnemyHealth = enemyHealth - player.carbohydrate
    //             setEnemyHealth(enemyHealth - 5)
    //             console.log(enemyHealth)
    //         } else {
    //             console.log("enemy dead")
    //             clearInterval(intervalId)
    //             gameEnded()
    //         }
    //     }

    //     let intervalId = gameFinished ? null: setInterval(attackEnemy, attackTimer)
    //     // map.interval = setInterval(attackEnemy, attackTimer)
    // }
    function plAction() {
        if (enemyHealth > 0) {
            setTimeout(() => {
                setEnemyHealth(enemyHealth - 5)
            }, attackTimer)
        } else {
            gameEnded()
        }
    }

    if (!gameFinished) {
        plAction()
    } else {

    }

    
    // console.log(playerHealth, enemyHealth)
    return (
        <div>
            Game happens now 
            <p>Player Health: {playerHealth}</p>
            <p>Enemy Health: {enemyHealth}</p>
        </div>
    )
}