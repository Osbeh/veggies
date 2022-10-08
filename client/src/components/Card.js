export default function Card({ veggie, onSelect }) {
    return (
        <div className={`vegCard`} onDoubleClick={() => onSelect(veggie.id)}>
            <h3>{veggie.name}</h3>
        </div>
    )
}