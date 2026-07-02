import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [server, useServer] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => useServer(data))
  }, [])


  const handlefrom = e => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const user = { name, email }
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        'constent-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }
  return (
    <>
      <h1>My Client server </h1>
      <p>Number of user  :{server.length}</p>
      <form onSubmit={handlefrom}>
        <input type="text" name="name" id="" /><br />
        <input type="text" name="email" id="" /><br />
        <button>submit</button>
      </form>
      <div>{server.map(user => <p key={user.id}>{user.name}</p>)}</div>
    </>
  )
}

export default App
