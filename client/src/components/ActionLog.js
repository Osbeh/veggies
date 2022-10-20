export default function ActionLog ({logEntry}) {
    return (
        <p>
            {logEntry.attacker} attacks for {Math.round(logEntry.damage * 10) / 10}. 
            {logEntry.defender} blocks for {Math.round(logEntry.block* 10) / 10}
        </p>
    )
}