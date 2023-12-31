import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (usrName, usrAge, usrCollage) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: usrName,
          age: usrAge,
          collage: usrCollage,
          id: Math.random.toString(),
        },
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
