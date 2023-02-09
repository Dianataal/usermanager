import React, {useState} from "react";
import './App.css';
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {
    const[users, setUsers] = useState([])

    const addUserHandler = (username, age) => {
        setUsers(prevUsers) => {
            return [
                ...prevUsers,
                {
                        id: Math.random().toString(),
                        name: username,
                        age: age
                }
            ]
        }

    }
    const users = [
        {name: 'Kati',
        age: 15
        },
        {
            name: 'Mati',
            age: 16
        }
    ]

    const onAddUserHandler = (username, age) => {

    }

  return (
      <div>
        <AddUser onAddUser={onAddUserHandler}/>
          <UsersList users={users}/>
      </div>
  );
}

export default App;
