import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [server, setServer] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setServer(data))
  }, [])


  const handlefrom = e => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const users = { name, email }
    console.log(users);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(users)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const newUser = [...server, data];
        setServer(newUser);
        from.reset();
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
      <div>{server.map(user => <p key={user.id}>{user.id}: {user.name} : {user.email}</p>)}</div>
    </>
  )
}

export default App
