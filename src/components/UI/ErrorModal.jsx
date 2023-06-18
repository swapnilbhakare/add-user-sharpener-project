import React, { Component } from 'react'
import Card from './Card'
import Button from './Button'
import stylesheet from './ErrorModal.module.css'
import ReactDOM from 'react-dom'
const Backdrop =props=>{
    return <div className={stylesheet.backdrop} onClick={props.onConfirm}></div>
}
const ModalOverlay=(props)=>{
    <Card className={stylesheet.modal}>
    <header className={stylesheet.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={stylesheet.content}>
        <p>{props.message}</p>
    </div>
    <footer className={stylesheet.action}>
        <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
</Card>

}
const ErrorModal = (props) => {
  return (
    <>
    {
        ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById("backdrop-root") )
        

    }    
    {
        ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById("overlay-root"))
    }
      
    </>
  )
}
export default ErrorModal
