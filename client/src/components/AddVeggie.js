import { useState } from 'react'

export default function AddTask({ onAdd }) {
    const [text, setText] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add veggie id or name')
            return;
        }

        onAdd({ text })
 
        setText('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input type="text" placeholder="add veggie" value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="save veggie" className="btn btn-block"/>
        </form>
    )
}
