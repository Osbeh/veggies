export default function ActionLog ({logEntry}) {
    return (
        <p>{logEntry.attacker} attacks for {logEntry.damage}. {logEntry.defender} blocks for {logEntry.block}</p>
    )
}