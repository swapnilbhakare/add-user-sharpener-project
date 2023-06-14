import React from 'react'
import styleSheet from './Button.module.css'
const Button = props => {
  return (
    <button className={`${styleSheet.button}`} type={props.type || 'button'} onClick={props.onClick} >{props.children}</button>
  )
}



export default Button