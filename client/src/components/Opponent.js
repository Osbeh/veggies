import Card from "./Card";
import Cards from "./Cards";

export default function Opponent ({ player, enemies, enemy, onSelect, selectEnemy }) {
    return (
        <div className={'gameDiv'}>
            <div className={'player'}><Card key={player.id} veggie={player} onSelect={onSelect}/></div>
            Select enemy:
            {enemy.id ? <div className={'enemy'}><Card key={enemy.id} veggie={enemy} selectEnemy={selectEnemy}/></div> : <Cards enemies={enemies} selectEnemy={selectEnemy}/>}
        </div>
    )
}