import { useState } from 'react'
import './App.css'
import UserContext from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider  from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
