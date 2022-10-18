import Cards from "./Cards";
import Card from "./Card";

export default function Game({ veggies, vegSelected, player, onSelect, enemySelected, enemy, selectEnemy, setGame, gameReady}) {

    // const [gameReady, setGameReady] = useState(false)

    if (!vegSelected) {
        return (
            <Cards veggies={veggies} onSelect={onSelect}/>
        )
    } else {
        if (!enemySelected) {
            return (
                <div className={'gameDiv'}>
                    <Card veggie={player} onSelect={onSelect}/>
                    <p style={{color:'white'}}>Select Enemy</p>
                    <Cards veggies={veggies} onSelect={selectEnemy}/>
                </div>
            )
        } else {
            return (
                <div className={'gameDiv'}>
                    <Card veggie={player} onSelect={onSelect}/>
                    <p style={{color:'white', alignSelf:'center'}}>VERSUS</p>
                    <Card veggie={enemy}/>
                    <button onClick={setGame}>Start Match</button>
                </div>
            )
        }
    }

}