import React from 'react'
import Card from './Card'
import Button from './Button'
import stylesheet from './ErrorModal.module.css'
const ErrorModal = (props) => {
  return (
    <div>
        
        <div className={stylesheet.backdrop} onClick={props.onConfirm}>
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
        </div>
    </div>
  )
}

export default ErrorModal