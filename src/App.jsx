import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { useState } from "react"

import UsersList from './components/UsersList'
import UserForm from './components/UserForm'

function App() {
  const [editUser, setEditUser] = useState(null);
  return (
    <Provider store={store}>
      <UserForm editUser={editUser} setEditUser={setEditUser}/>
      <UsersList setEditUser={setEditUser}/>
    </Provider>
  )
}

export default App