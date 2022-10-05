import { useState } from 'react'


import "../Components/loginForm.css"
import bookImg from '../svg/undraw_Book_reading_re_fu2c.png';

export default function Signup() {

 const [isSubmitted, setIsSubmitted] = useState(false);
 
 const handleSubmit = (event) => {
   event.preventDefault();
 }

  // JSX code for login form
 const renderForm = (
  <div className="form">
   <form onSubmit={handleSubmit}>
    <div className="input-container">
       <label>Name </label>
       <input type="text" name="uname" required />
     </div>
     <div className="input-container">
       <label>Username </label>
       <input type="text" name="uname" required />
     </div>
     <div className="input-container">
       <label>Password </label>
       <input type="password" name="pass" required />
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
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully signed up</div> : renderForm}
   </div>
  </div>
 )
}


// import { useState } from 'react'
// import ReactDOM from "react-dom"

// import "../Components/loginForm.css"

// export default function Signup() {

//   const handleSubmit = (event) => {
//    event.preventDefault();

//   const renderForm = (
//     <div className="form">
//     <form onSubmit={handleSubmit}>
//       <div className="input-container">
//         <label>Name </label>
//         <input type="text" name="uname" required />
//       </div>
//       <div className="input-container">
//         <label>Username </label>
//         <input type="text" name="uname" required />
//       </div>
//       <div className="input-container">
//         <label>Password </label>
//         <input type="password" name="pass" required />
//       </div>
//       <div className="button-container">
//         <input type="submit" />
//       </div>
//     </form>
//    </div>
//   )

//   return (
//     <div className="login">
//     <div className="login-form">
//       <div className="title">Sign In</div>
//       {renderForm}
//     </div>
//    </div>
//   )
//  }
// }