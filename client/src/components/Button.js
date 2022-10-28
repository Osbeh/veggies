import PropTypes from 'prop-types'

export default function Button({ color, text, onClick, type }) {

    return (
        <button onClick={() => onClick(type)} style={{ backgroundColor:color }} className='btn'>{text}</button>
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