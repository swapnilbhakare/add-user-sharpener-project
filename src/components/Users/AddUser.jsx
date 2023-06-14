import React,{useState} from 'react'
import styleSheet from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Wrapper/Wrapper'
const AddUser = (props) => {
  const [userName,setUserName]=useState('')
  const [userAge,setUserAge]=useState('')
  const [err,setError]=useState();


const addUserHandler=(event)=>{
  event.preventDefault()
if(userName.trim().length===0 || userAge.trim().length===0){
  setError({
    title:"Invalid input",
    message:"Please enter a valid name and age"
  })
  return
}
if(+userAge<1){
  setError({
    title:"Invalid age",
    message: 'Please enter a valid age (>0).'
  })
  return

}
  props.onAddUser(userName,userAge)
  setUserName('')
  setUserAge('')
}

  const userNameHandler=(event)=>{
    setUserName(event.target.value)
    
  }
  const userAgeHandler=(event)=>{
    setUserAge(event.target.value)

  }
  const errorHandler =(props)=>{
    setError(null)
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
                    <input type="text" id='username' value={userName}  onChange={userNameHandler}/>
              
                    <label htmlFor='age'>Age</label>
                    <input type="number" id='age' value={userAge} onChange={userAgeHandler}/>
                  <Button type='submit'>Add User</Button>
              </form>

            </Card>
    </Wrapper>
  )
}


export default AddUser