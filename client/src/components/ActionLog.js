export default function ActionLog ({logEntry}) {
    return (
        <p>
            {logEntry.attacker} Iskee {Math.round(logEntry.damage * 10) / 10}. 
            {logEntry.defender} Torjuu {Math.round(logEntry.block* 10) / 10}
        </p>
    )
}