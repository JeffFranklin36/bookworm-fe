import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
 console.log(localStorage.getItem('token'))
 let isLoggedIn = localStorage.getItem('token') !== ''
 let auth = {"token": isLoggedIn}
 
 return(
  auth.token ? <Outlet/> : <Navigate to="/login"/>
 )
}

export default PrivateRoutes