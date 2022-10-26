    export default function Card({ veggie, onSelect }) {
        return (
            <div className={`vegCard`} onDoubleClick={() => onSelect(veggie.id)}>
                <h3>{veggie.name}</h3>
                <p>Elämä: {Math.round(veggie.energyKcal * 10) / 10}</p>
                <p>Hyökkäys: {Math.round(veggie.carbohydrate * 10) / 10}</p>
                <p>Torjunta: {Math.round(veggie.protein * 10) / 10}</p>
                <p>Aloite: {Math.round((veggie.fat + veggie.carbohydrate + veggie.protein) * 10) / 10} </p>
            </div>
        )
}