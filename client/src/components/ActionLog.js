import { useEffect, useRef } from "react"

export default function ActionLog ({logEntry}) {

    const el = useRef(null)

    useEffect(() => {
        el.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
    })

    return (
        <p>
            {logEntry.attacker} Iskee {Math.round(logEntry.damage * 10) / 10}. 
            {logEntry.defender} Torjuu {Math.round(logEntry.block* 10) / 10}
            <div id={'el'} ref={el}></div>
        </p>
    )
}