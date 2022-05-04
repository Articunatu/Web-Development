import React from 'react'
import PropTypes from 'prop-types'
import { Button }  from './Button'

export const Header = ({title}) => {
  return (
    <div>
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add'/>
            {/* <Button color='red' text='Hello 1'/>
            <Button color='blue' text='Hello 2'/> */}
        </header>
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

//CSS in JS
const headingStyle = {
    color: 'blue',
    backgroundColor: 'yellow'
}