import React,{useState,useRef} from 'react'
import styleSheet from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Wrapper/Wrapper'
const AddUser = (props) => {
 const nameInputRef= useRef();
 const ageInputRef= useRef();
 const collageNameInputRef  =useRef()

  const [err,setErr]=useState();


const addUserHandler=(event)=>{
  event.preventDefault()
  const enterdName= nameInputRef.current.value
 const enterdAge= ageInputRef.current.value
 const enterdCollageName = collageNameInputRef.current.value



if(enterdName.trim().length===0 || enterdAge.trim().length===0 || enterdCollageName.trim().length===0 ){
  setErr({
    title:"Invalid input",
    message:"Please enter a valid name and age and college Name"
  })
  return
}
if(+enterdAge<1){
  setErr({
    title:"Invalid age",
    message: 'Please enter a valid age (>0).'
  })
  return

}
  props.onAddUser(enterdName,enterdAge,enterdCollageName)
  nameInputRef.current.value=''
  ageInputRef.current.value=''
  collageNameInputRef.current.value=''

  
}


  const errorHandler =(props)=>{
    setErr(null)
  }
 
  

  return (
    <Wrapper>{
      err &&(
        <ErrorModal title={err.title} 
        message={err.message}
         onConfirm={errorHandler} 
         />
      )
      }
        <Card className={styleSheet.input}>
              <form onSubmit={addUserHandler}>
                    <label htmlFor='username' >UserName</label>
                    <input type="text" ref={nameInputRef}
                     id='username'/>
              
                    <label htmlFor='age'>Age</label>
                    <input type="number" ref={ageInputRef}
                     id='age'/>
                      <label htmlFor='collageName'>Collage Name</label>
                    <input type="text" ref={collageNameInputRef}
                     id='age'/>
                  <Button type='submit'>Add User</Button>
              </form>

            </Card>
    </Wrapper>
  )
}


export default AddUser