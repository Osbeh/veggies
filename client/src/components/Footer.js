export default function Footer({ defeatedEnemies }) {
    console.log(defeatedEnemies)
    return (
        <ol className="defeated">
        {defeatedEnemies.map((enem) => (
            <li key={enem.id}>{enem.name}</li>
        ))}
        </ol>
    )
}
