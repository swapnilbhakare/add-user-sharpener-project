import React from 'react'
import styleSheet from './Card.module.css'

const Card = (props) => {
  return (
    <div className={`${styleSheet.card} ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card