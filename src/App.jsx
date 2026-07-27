import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Counter from './Test5/Counter'
import Props from './Test5/props'
import './App.css'
import RegistrationForm from './Test5/RegistrationForm'
import FormValidation from './Test5/FormValidation'

function App() {
  const [count, setCount] = useState(0)

  return (


    // <Counter/>
    // <Props/>
    // <RegistrationForm/>
    <FormValidation/>


  )
}

export default App
