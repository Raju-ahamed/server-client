import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [server, useServer] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => useServer(data))
  }, [])

  return (
    <>
      <h1>My Client server </h1>
      <p>Number of user  :{server.length}</p>
    </>
  )
}

export default App
