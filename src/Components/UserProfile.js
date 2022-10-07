// //React features & hooks
// import { useEffect, useState } from 'react'
// import { useNavigate, BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom'

// //React-Bootstrap components
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col';

//Other styling
import { Container } from "react-bootstrap"
import "../Components/loginForm.css"

export default function UserProfile () {
 // const {id} = useParams()
 // console.log(id)
 // const [user, setUser] = useState([])
 // const navigate = useNavigate()

 // let handleDelete = async () => {
 //  const URL = `${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`
 //  await fetch(URL, {
 //   method: "DELETE",
 //  });
 //  navigate('/recipes')
 // };
     
     // useEffect(() => {
     //      const fetchData = async () => {
     //           console.log(process.env)
     //           const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user/${id}`
     //           console.log(URL)
     //           const response = await fetch(URL)
     //           const data = await response.json()
     //           setUser(data)
     //      }
     //      fetchData()
     // }, [])

 const display = (

      <div>
         <p>hello</p>
        <div className="button-container">
         <input type="submit"/>
        </div>
      </div>
      )

 return (
  <Container>{display}</Container>
  
 )    
}