//react-features
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';

//styling
import './App.css';

//components
import HomeSearch from './Components/HomeSearch';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserProfile from './Components/UserProfile';
import SearchedBooks from './Components/SearchedBooks';
import EditUser from './Components/EditUser';
import Logout from './Components/Logout'
import Navbar from './Components/Navbar';

//utils
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="display">
        <Navbar/>
        <Routes >
          <Route path ='/' element={<HomeSearch/>}/>
          <Route path ='/signup' element={<Signup/>} />
          <Route element={<PrivateRoutes/>}>
            <Route path ='/userProfile/' element={<UserProfile/>}/>
            <Route path='/logout' element={<Logout/>}></Route>
          </Route>
          <Route path ='/searchedBooks/:id' element={<SearchedBooks/>} />
          <Route path ='/updateUser/:id' element={<EditUser/>} />
          <Route path ='/login' element={<Login/>}/>
        </Routes>
      </div>
      </Router>
    </div>
  );
}


export default App;
