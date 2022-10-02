import { useState } from 'react'
import ReactDOM from "react-dom"

import "../Components/loginForm.css"

export default function LoginPage() {

 const [errorMessages, setErrorMessages] = useState({});
 const [isSubmitted, setIsSubmitted] = useState(false);
   
 const errors = {
  passTooLong: "Password is too long"
  unameTooLong: "Username is too long"
 };
 
 const handleSubmit = (event) => {
   //Prevent page reload
   event.preventDefault();
 
   let { uname, pass } = document.forms[0];
 
   // Find user login info
   const userData = database.find((user) => user.username === uname.value);
 
   // Compare user info
   if (userData) {
     if (userData.password = pass.length ) {
       // Invalid password
       setErrorMessages({ name: "unameOrPassword", message: errors.unameOrPassword });
     } else {
       setIsSubmitted(true);
     }
   } else {
     // Username not found
     setErrorMessages({ name: "unameOrPassword", message: errors.unameOrPassword });
   }
 };

 
 // Generate JSX code for error message
 const renderErrorMessage = (name) =>
 name === errorMessages.name && (
  <div className="error">{errorMessages.message}</div>
  );

  // JSX code for login form
 const renderForm = (
  <div className="form">
   <form onSubmit={handleSubmit}>
     <div className="input-container">
       <label>Name </label>
       <input type="text" name="name" required />
     </div>
     <div className="input-container">
       <label>Username </label>
       <input type="text" name="uname" required />
     </div>
     <div className="input-container">
       <label>Password </label>
       <input type="password" name="pass" required />
     </div>
     {renderErrorMessage("unameOrPassword")}
     <div className="button-container">
       <input type="submit" />
     </div>
   </form>
  </div>
);




 return (
  <div className="login">
   <div className="login-form">
     <div className="title">Sign In</div>
     {isSubmitted ? <div>User is successfully created</div> : renderForm}
   </div>
  </div>
 )
}