import Cards from "./Cards";
import Card from "./Card";
import Boss from "./Boss"

export default function Game({ veggies, vegSelected, player, onSelect, enemySelected, enemy, selectEnemy, setGame, setBossEnemy}) {

    if (veggies.length === 0 && !enemySelected) {
        return (
            <Boss player={player} setBossEnemy={setBossEnemy}></Boss>
        )
    }
    
    if (!vegSelected) {
        return (
            <>
            <p style={{color:'white', textAlign:'center'}}>Valitse hahmosi tuplaklikkaamalla</p>
                <Cards veggies={veggies} onSelect={onSelect}/>
            </>
        )
    } else {
        if (!enemySelected) {
            return (
                <div className={'gameDiv'}>
                    <Card veggie={player} onSelect={onSelect}/>
                    <p style={{color:'white'}}>Valitse vastustajasi</p>
                    <Cards veggies={veggies} onSelect={selectEnemy}/>
                </div>
            )
        } else {
            return (
                <div className={'gameDiv'}>
                    <Card veggie={player} onSelect={onSelect}/>
                    <p style={{color:'white', alignSelf:'center'}}>VASTAAN</p>
                    <Card veggie={enemy}/>
                    <button onClick={setGame}>Aloita ottelu</button>
                </div>
            )
        }
    }

}