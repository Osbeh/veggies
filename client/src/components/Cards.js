import Card from './Card'

export default function Cards({ veggies, onSelect }) {
    

    return (
        <>
            {veggies.map((veggie) => (
                <Card key={veggie.id} veggie={veggie} onSelect={onSelect}/>
            ) )}
        </>
    )
}
