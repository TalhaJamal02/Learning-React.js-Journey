import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h3 className=' text-center text-xl mb-6 bg-cyan-500 text-black p-5 rounded-lg'>Checking Tailwind</h3>
      <Card username="Arsal" btnText="Click Me" />
      <Card username="Talha" />
    </>
  )
}

export default App
