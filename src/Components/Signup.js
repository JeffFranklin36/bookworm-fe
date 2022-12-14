//react features
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


//styling
import "../loginForm.css"
import bookImg from '../svg/undraw_Book_reading_re_fu2c.png';

export default function Signup() {

 const [name, setName] = useState('')
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [bio, setBio] = useState('')

 const [error, setError] = useState('')
 const navigate = useNavigate()
 
 const handleSubmit = async (event) => {
   event.preventDefault();

   let user = {
    "name": name,
    "username": username,
    "password": password,
    "bio": bio
  }

  console.log('user--->', user)
   const URL = `${process.env.REACT_APP_BACKEND_URL}/user/new`
   const response = await fetch(URL, {
     method: 'POST',
     body: JSON.stringify(user),
     headers: {
       'Content-Type': 'application/json'
     }
   })
   const data = await response.json()

   if (!response.ok) {
     setError(data.error)
   }
   if (response.ok) {
     setError(null)
     setName('')
     setUsername('')
     setPassword('')
     setBio('')
     console.log('new user added:', data)
     navigate('/')
   }
 }



  // JSX code for signup form
 const renderForm = (
  <div className="form">
   <form onSubmit={handleSubmit}>
    <div className="input-container">
       <label>Name </label>
       <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter First and Last name"
          maxLength={30}
          required />
     </div>
     <div className="input-container">
       <label>Username </label>
       <input 
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Enter Username"
          maxLength={20}
          required />
     </div>
     <div className="input-container">
       <label>Password</label>
       <input 
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
          maxLength={20}
          required /> 
     </div>
     <div className="input-container">
       <label>Bio</label>
       <input 
          type="bio"
          name="bio"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
          as="textarea" 
          rows={3}
          placeholder="Enter Short Bio"
          maxLength={280}
          required /> 
     </div>
     <div className="button-container">
       <input type="submit" />
     </div>
   </form>
  </div>
);




 return (
  <div className="login">
   <div className="login-form">
      <div className="title">Bookworm</div>
      <div className="logo"><img className='image' src={bookImg} alt="Book image"/></div>
      <div className="title">Sign up</div>
      {renderForm}
   </div>
  </div>
 )
}