import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import "../loginForm.css"
import bookImg from '../svg/undraw_Book_reading_re_fu2c.png';

export default function Login() {

 const [error, setError] = useState('');
 const [isSubmitted, setIsSubmitted] = useState(false);
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')


 const navigate = useNavigate()
   
 const handleSubmit = async (event) => {
   event.preventDefault();



   let user = {
    "username": username,
    "password": password
  }

  console.log('user--->', user)
  console.log(username)
  console.log(password)
   const URL = `${process.env.REACT_APP_BACKEND_URL}/user/login`
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
     localStorage.setItem('token', data.token)
     localStorage.setItem('id', data.user._id)
     setError(null)
     setUsername('')
     setPassword('')
     console.log('Successfully Logged in:', data)
     navigate('/')
   }
 }
 
//    let { uname, pass } = document.forms[0];
 
//    // Find user login info
//    const userData = database.find((user) => user.username === uname.value);
 
//    // Compare user info
//    if (userData) {
//      if (userData.password !== pass.value) {
//        // Invalid password
//        setErrorMessages({ name: "unameOrPassword", message: errors.unameOrPassword });
//      } else {
//        setIsSubmitted(true);
//      }
//    } else {
//      // Username not found
//      setErrorMessages({ name: "unameOrPassword", message: errors.unameOrPassword });
//    }
//  };

 
 // Generate JSX code for error message
//  const renderErrorMessage = (name) =>
//  name === errorMessages.name && (
//   <div className="error">{errorMessages.message}</div>
//   );

  // JSX code for login form
 const renderForm = (
  <div className="form">
   <form onSubmit={handleSubmit}>
     <div className="input-container">
       <label>Username </label>
       <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        required />
     </div>
     <div className="input-container">
       <label>Password </label>
       <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        required />
     </div>
     {/* {renderErrorMessage("unameOrPassword")} */}
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
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  </div>
 )
}