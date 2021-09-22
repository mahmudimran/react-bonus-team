import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([])

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=20')
    .then(res=>res.json())
    .then(data => setUsers(data.results)
  
    )
  },[])

    const addMember = (name) => {
    const newTeam = [...team, name]
    setTeam(newTeam)

    }

  return (
    <div className="container">
      <h3>Team Builder</h3>
      {
        team.map((m, idx)=> <p key={idx}>{m}</p>)
      }
      {
        users.map(user => <User key={user.cell} user={user} addMember={addMember}></User>)
      }
    </div>
  );
}

export default App;
