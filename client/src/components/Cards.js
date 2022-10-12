import Card from './Card'

export default function Cards({ veggies, onSelect }) {
    // if (veggies) {
        return (
            <div className={'cards'}>
                {veggies.map((veggie) => (
                    <Card key={veggie.id} veggie={veggie} onSelect={onSelect}/>
                ) )}
            </div>
        )
    // }
    // if (enemies) {
    //     return (
    //         <div className={'cards'}>
    //             {enemies.map((enemy) => (
    //                 <Card key={enemy.id} enemy={enemy} selectEnemy={selectEnemy}/>
    //             ) )}
    //         </div>
    //     )
    // }
}
