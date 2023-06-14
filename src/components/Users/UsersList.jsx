import React from 'react'
import Card from '../UI/Card'
import stylesheet from './UserList.module.css'
const UsersList = (props) => {
  // const users = props.users;
  return (
<Card className={stylesheet.users}>
<ul>
  {
   props.users.map((user)=>
       <li key={user.id}> 
       {user.name} 
       ({user.age} years old)
       </li> )
  }
   </ul> 
</Card>
  )
}

export default UsersList