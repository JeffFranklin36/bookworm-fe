import { Navigate } from 'react-router-dom'


export default function Logout() {
 localStorage.setItem('token', '')
 console.log(localStorage.getItem('token'))

 return (
  <Navigate to="/"/>
 )
}