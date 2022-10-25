import Header from "./Header";
import Button from "./Button"
import AddVeggie from "./AddVeggie"

export default function SelectVegType({ onTypeSelect, onAdmin, admin }) {

    // const [vegType, setVegType] = useState('')

    const onClick = (text) => {
        onTypeSelect(text)
    }

    return (
        <>
            <Header onAdmin={onAdmin}/>
            <p style={{color:'white', textAlign:'center'}}>Select Vegetable Type:</p>
            <div className='selectVeg'>
                <Button text={'fruits'} onClick={onClick}></Button>
                <Button text={'vegetables'} onClick={onClick}/>
                <Button text={'roots'} onClick={onClick}/>
            </div>
            {admin && <AddVeggie />}
        </>

    )
}