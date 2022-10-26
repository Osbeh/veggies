import Button from "./Button"

export default function Header({ vegType, onTypeChange, onAdmin }) {

    const adminClick = () => {
        onAdmin()
    }

    const typeChangeClick = () => {
        onTypeChange()
    }

    return (
        <header className='header'>
            <h1>Vimmaiset Vihannekset</h1>
            <div className='controlDiv'>
            {vegType && <Button color={'#35494f'} text={'Vaihda vihannestyyppi'} onClick={typeChangeClick}/>}
            <Button color={'#35494f'} text={'admin'} onClick={adminClick}></Button>
            </div>
        </header>
    )
}
