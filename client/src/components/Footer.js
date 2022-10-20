export default function Footer({ defeatedEnemies }) {
    console.log(defeatedEnemies)
    return (
        <div>
            <h4>Defeated Vegetables</h4>
            <ol className="defeated">
            {defeatedEnemies.map((enem) => (
                <li key={enem.id}>{enem.name}</li>
            ))}
            </ol>
        </div>
    )
}
