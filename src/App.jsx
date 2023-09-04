

import { Link } from 'react-router-dom';
import './App.css'

function App() {


  const handleUser = (event) =>{
   event.preventDefault();
   const form = event.target; 
   const name = form.name.value;
   const email = form.email.value;
   const user={name ,email}
   console.log(user);

   fetch('http://localhost:5000/user',{
    method:'POST',
    headers:{
      "content-type": 'application/json'
    },
    body:JSON.stringify(user)
   })
      .then(res=>res.json())
      .then(data => {
    console.log(data);
    if (data.insertedId) {
      alert('successfully')
      form.reset()
    }
   })

  }

  return (
    <>
      
      <h1>curd</h1>
      <Link to="/user"><button>see user</button></Link>
      <form onSubmit={handleUser}>
        <input type="text" name='name' /><br />
        <input type="email" name='email' /><br />
        <input type="submit" value='Add user' />
      </form>
    </>
  )
}

export default App
