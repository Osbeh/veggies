export default function Card({ veggie, onSelect }) {
    return (
        <div className={`vegCard`} onDoubleClick={() => onSelect(veggie.id)}>
            <h3>{veggie.name}</h3>
            <p>Health: {veggie.energyKcal}</p>
            <p>Attack: {veggie.carbohydrate}</p>
            <p>Defence: {veggie.protein}</p>
            <p>Initiative: {veggie.fat} </p>
        </div>
    )
}