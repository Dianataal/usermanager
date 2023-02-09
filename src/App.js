import './App.css';
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {
    const users = [
        {name: 'Kati',
        age: 15
        },
        {
            name: 'Mati',
            age: 16
        }

    ]
  return (
      <div>
        <AddUser/>
          <UsersList users={users}/>
      </div>
  );
}

export default App;
