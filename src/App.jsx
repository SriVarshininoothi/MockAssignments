import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Counter from './Test5/Counter'
import Props from './Test5/props'
import './App.css'
import RegistrationForm from './Test5/RegistrationForm'
import FormValidation from './Test5/FormValidation'
import UserCard from './Test5/UserCard'
import UserRegistration from './Test5/UserRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (


    // <Counter/>
    // <Props/>
    // <RegistrationForm/>
    // <FormValidation/>
    <UserRegistration/>


  )
}

export default App
