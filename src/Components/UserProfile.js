//React features & hooks
import { useEffect, useState } from 'react'
import { useNavigate, BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom'

//React-Bootstrap components
import Container from 'react-bootstrap/Container';

import bookImg from '../svg/undraw_Book_reading_re_fu2c.png';


import "../Profile.css"

export default function UserProfile () {
 const [user, setUser] = useState([])
 const navigate = useNavigate()
   

 let userRequest = {
  "id": localStorage.getItem('id')
}
console.log(userRequest)

     useEffect(() => {
          const fetchData = async () => {
               console.log(process.env)
               const URL = `${process.env.REACT_APP_BACKEND_URL}/user/me/`
               console.log(URL)
               const response = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify(userRequest),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
               const data = await response.json()
               setUser(data)
          }
          fetchData()
     }, [])

 const display = (

      <div className='profile-page'>
        <div className='namePic'>
          {/* <img alt='Profile Picture' src={user.profilePic}/> */}
          <img alt='Avatar' src={bookImg}/>
          <h1>{user.name}</h1>
        </div>
        <div className="button-container">
        </div>
      </div>
      )

 return (
  <Container>{display}</Container>
  
 )    
}