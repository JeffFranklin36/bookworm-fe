//React features & hooks
import { useEffect, useState } from 'react'
import { useNavigate, BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom'

//React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

import "../Components/loginForm.css"

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

      <div>
        <img src={user.profilePic}/>
         <p>{user.name}</p>
        <div className="button-container">
        </div>
      </div>
      )

 return (
  <Container>{display}</Container>
  
 )    
}