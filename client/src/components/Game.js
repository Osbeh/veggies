import Cards from "./Cards";
import Card from "./Card";
import { useState } from "react";



export default function Game({ veggies, vegSelected, player, onSelect, enemySelected, enemy, selectEnemy, setGame, gameReady}) {

    // const [gameReady, setGameReady] = useState(false)

    if (!vegSelected) {
        return (
            <Cards veggies={veggies} onSelect={onSelect}/>
        )
    } else {
        if (!enemySelected) {
            return (
                <>
                    <Card veggie={player} onSelect={onSelect}/>
                    <p>Select Enemy</p>
                    <Cards veggies={veggies} onSelect={selectEnemy}/>
                </>
            )
        } else {
            // if (!gameReady) {
            //     setGame()
            // }
            return (
                <div className={'gameDiv'}>
                    <Card veggie={player} onSelect={onSelect}/>
                    <p>VERSUS</p>
                    <Card veggie={enemy}/>
                    <button onClick={setGame}>Start Game</button>
                </div>
            )
        }
    }

}