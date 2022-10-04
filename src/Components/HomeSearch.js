import { API_URL } from '../API';
import React, {useState,useEffect, Component} from 'react';
// import axios from 'axios'
import bookImg from '../svg/undraw_Book_reading_re_fu2c.png';
import SearchArea from './SearchArea';
import request from 'superagent';


import '../Home.css'


class HomeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data);
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }
render() {
    return (
        <div className="home-search">
            <img className='image' src={bookImg} alt="Book image"/>
            <h1 className='title'>Bookworm</h1>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <button>Surprise me!</button>
            <h3>Library in your pocket, Search your favorite books or find something new!</h3>
         </div>
    )
}
}

export default HomeSearch;