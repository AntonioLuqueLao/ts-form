import './App.css';
import UserList from './componentes/UsersList';
import UserForm from './componentes/UserForm';
import { user } from './types';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState<user[]>([])

  const addUser = (newUser: user) => {

    setUsers((prevUsers) => 
      [
        ...prevUsers,
        newUser
      ]
    )
  }

  return (
    <div className="App">
      <UserList users={users}/>
      <UserForm addUser={addUser}/>
    </div>
  );
}

export default App;
