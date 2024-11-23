import UserContextProvider from './context/UseContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Hy my name is talha
        good job
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
