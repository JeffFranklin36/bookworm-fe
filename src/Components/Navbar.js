import { useLocation, BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
 let location = useLocation()
 let haveToken = localStorage.getItem('token') !== ''
 let display 
 
 if(haveToken === true){
  display = (
  <nav className='App-nav'>
  <Container>
        <Nav className="justify-content-end"  defaultActiveKey="/Home">
          <Nav.Item className="navItem">
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Link to="/userProfile/:id">Profile</Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Link to="/logout">Logout</Link>
          </Nav.Item>
        </Nav>
      </Container>
  </nav>
  )
 }else{
  display = (
  <nav className='App-nav'>
  <Container>
        <Nav className="justify-content-end"  defaultActiveKey="/Home">
          <Nav.Item className="navItem">
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Link to="/signup">Sign Up</Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Link to="/login">Login</Link>
          </Nav.Item>
        </Nav>
      </Container>
  </nav>
  )
 }
 
 return(
  <div>
   {display}
  </div>
  )
}