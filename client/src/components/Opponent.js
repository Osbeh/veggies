import Card from "./Card";
import Cards from "./Cards";

export default function Opponent ({ player, enemies, onSelect, enemySelect }) {
    return (
        <div className={'gameDiv'}>
            <div className={'player'}><Card key={player.id} veggie={player} onSelect={onSelect}/></div>
            Select enemy:
            <Cards veggies={enemies} onSelect={enemySelect}/>
        </div>
    )
}