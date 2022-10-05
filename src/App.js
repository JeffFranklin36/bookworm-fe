//react-features
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

//styling
import './App.css';

//components
import HomeSearch from './Components/HomeSearch';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserProfile from './Components/UserProfile';
import DisplayBook from './Components/DisplayBook';
import SearchedBooks from './Components/SearchedBooks';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="display">
        <Routes>
          <Route path ='/' element={<HomeSearch/>}/>
          <Route path ='/getBook/:id' element={<DisplayBook/>}/>
          <Route path ='/signup' element={<Signup/>} />
          <Route path ='/userProfile/:id' element={<UserProfile/>}/>
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
