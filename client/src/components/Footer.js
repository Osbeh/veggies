export default function Footer({ defeatedEnemies }) {
    return (
        <div>
            <h4>Päihitetyt vihannekset</h4>
            <ol className="defeated">
            {defeatedEnemies.map((enem) => (
                <li key={enem.id}>{enem.name}</li>
            ))}
            </ol>
        </div>
    )
}
