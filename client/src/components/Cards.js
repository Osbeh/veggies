import Card from './Card'

export default function Cards({ veggies, onSelect }) {
    

    return (
        <div className={'cards'}>
            {veggies.map((veggie) => (
                <Card key={veggie.id} veggie={veggie} onSelect={onSelect}/>
            ) )}
        </div>
    )
}
