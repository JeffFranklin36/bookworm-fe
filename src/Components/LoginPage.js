import { useState } from 'react'
import ReactDOM from "react-dom"

import "../Components/loginForm.css"

export default function LoginPage() {

 const [errorMessages, setErrorMessages] = useState({});
 const [isSubmitted, setIsSubmitted] = useState(false);
  
 // Mock User Login info
  const database = [
   {
     username: "user1",
     password: "pass1"
   },
   {
     username: "user2",
     password: "pass2"
   }
 ];
 
 const errors = {
  unameOrPassword: "invalid username or password"
 };
 
 const handleSubmit = (event) => {
   //Prevent page reload
   event.preventDefault();
 
   let { uname, pass } = document.forms[0];
 
   // Find user login info
   const userData = database.find((user) => user.username === uname.value);
 
   // Compare user info
   if (userData) {
     if (userData.password !== pass.value) {
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
     {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
   </div>
  </div>
 )
}

  // <Form className='loginForm' onSubmit={handleSubmit}>
  //   <Form.Group className="mb-3" controlId="formUsername">
  //   <Form.Label>Username</Form.Label>
  //   <Form.Control 
  //             type="text" 
  //             required="required" 
  //             placeholder="Enter Username" 
  //             maxLength={50}/>
  //             {/* // onChange={(e) => setTitle(e.target.value)}
  //             // value={title} */}
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="formPassword">
  //   <Form.Label>Password</Form.Label>
  //   <Form.Control 
  //             type="text" 
  //             required="required" 
  //             placeholder="Enter Password" 
  //             maxLength={50}/>
  //             {/* // onChange={(e) => setTitle(e.target.value)}
  //             // value={title} */}
  //   </Form.Group>
  //   <Button className='submit-button' variant="primary" type="submit">
  //          Login
  //   </Button>
  // </Form>