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
            <p style={{color:'white', textAlign:'center'}}>Valitse vihannestyyppi:</p>
            <div className='selectVeg'>
                <Button text={'Hedelmät'} type={'fruits'} onClick={onClick}></Button>
                <Button text={'Kasvikset'} type={'vegetables'} onClick={onClick}/>
                <Button text={'Juurekset'} type={'roots'} onClick={onClick}/>
            </div>
            {admin && <AddVeggie />}
        </>

    )
}