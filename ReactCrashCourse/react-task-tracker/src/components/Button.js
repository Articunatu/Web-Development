import PropTypes from 'prop-types'

export const Button = ({color, text}) => {
  const onClick = (e) => {
      console.log('click')
  }

  return (
    <button onClick={onClick} style={{backgroundColor: color}} 
    className='btn'>{text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}