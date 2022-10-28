import { useState } from 'react'

export default function AddTask() {
    const [vegId, setVegId] = useState('')

    const options = [
        {value: '', text: '--Valitse--'},
        {value: 'fruits', text: 'Hedelmä'},
        {value: 'roots', text: 'Juures'},
        {value: 'vegetables', text: 'Vihannes'},
    ];

    const [vegType, setVegType] = useState(options[0].value);

    const handleChange = event => {
        setVegType(event.target.value);
    };

    const onAdd = async (veggie) => {
        console.log(veggie)
        const res = await fetch(`http://localhost:4000/addveg?id=${veggie.vegId}&type=${veggie.vegType}`)
        console.log(res.status)
    }


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
            <input type="text" placeholder="Fineli ID" value={vegId} onChange={(e) => setVegId(e.target.value)}/>
            <select value={vegType} onChange={handleChange}>
                {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
                ))}
            </select>
            <input type="submit" value="Tallenna" className="btn btn-block"/>
        </form>
    )
}
 