import PropTypes from 'prop-types'

export default function Button({ color, text, onClick }) {

    // const handleClick = () => {
    //     console.log(this)
    // }
    
    return (
        <button onClick={() => onClick(text)} style={{ backgroundColor:color }} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'wheat'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}