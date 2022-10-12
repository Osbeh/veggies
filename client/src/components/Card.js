// export default function Card({ veggie, enemy, onSelect, selectEnemy }) {
    export default function Card({ veggie, onSelect }) {
// if (veggie) {
        return (
            <div className={`vegCard`} onDoubleClick={() => onSelect(veggie.id)}>
                <h3>{veggie.name}</h3>
                <p>Health: {veggie.energyKcal}</p>
                <p>Attack: {veggie.carbohydrate}</p>
                <p>Defence: {veggie.protein}</p>
                <p>Initiative: {veggie.fat} </p>
            </div>
        )
    // } else {
    //     return (
    //         <div className={`vegCard`} onDoubleClick={() => selectEnemy(enemy.id)}>
    //             <h3>{enemy.name}</h3>
    //             <p>Health: {enemy.energyKcal}</p>
    //             <p>Attack: {enemy.carbohydrate}</p>
    //             <p>Defence: {enemy.protein}</p>
    //             <p>Initiative: {enemy.fat} </p>
    //         </div>
    //     )
    // }
}