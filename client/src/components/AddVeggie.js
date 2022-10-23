import { useState } from 'react'

export default function AddTask({ onAdd }) {
    //const [vegType, setVegType] = useState('')
    const [vegId, setVegId] = useState('')

    const options = [
        {value: '', text: '--Valitse--'},
        {value: 'fruits', text: 'Hedelmä'},
        {value: 'roots', text: 'Juures'},
        {value: 'vegetables', text: 'Vihannes'},
    ];

    const [vegType, setVegType] = useState(options[0].value);

    const handleChange = event => {
        console.log(event.target.value);
        setVegType(event.target.value);
    };


    const onSubmit = (e) => {
        e.preventDefault()
        if(vegType === '') {
            alert('Please add veggie type')
            return;
        }
        if (!vegId) {
            alert('Please add veggie id')
            return;
        }

        onAdd({ vegId, vegType })

        setVegId('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Veggie ID" value={vegId} onChange={(e) => setVegId(e.target.value)}/>
            {/* <input type="text" placeholder="Veggie type" value={vegType} onChange={(e) => setVegType(e.target.value)}/> */}
            <select value={vegType} onChange={handleChange}>
                {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
                ))}
            </select>
            <input type="submit" value="save veggie" className="btn btn-block"/>
        </form>
    )
}
 