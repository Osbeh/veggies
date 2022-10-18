    export default function Card({ veggie, onSelect }) {
        return (
            <div className={`vegCard`} onDoubleClick={() => onSelect(veggie.id)}>
                <h3>{veggie.name}</h3>
                <p>Health: {Math.round(veggie.energyKcal * 10) / 10}</p>
                <p>Attack: {Math.round(veggie.carbohydrate * 10) / 10}</p>
                <p>Defence: {Math.round(veggie.protein * 10) / 10}</p>
                <p>Initiative: {Math.round((veggie.fat + veggie.carbohydrate + veggie.protein) * 10) / 10} </p>
            </div>
        )
}