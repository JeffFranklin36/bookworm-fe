import React, {useState,useEffect, Component} from 'react';
import bookImg from '../svg/undraw_Book_reading_re_fu2c.png';
import SearchArea from './SearchArea';
import request from 'superagent';
import SearchedBooks from './SearchedBooks';


import '../Home.css'


class HomeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                const cleanData = this.cleanData(data)
                this.setState({ books: cleanData })
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    handleSort = (e) => {
        this.setState({ sort: e.target.value })
    }


    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }

            else if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: "https://www.freeiconspng.com/uploads/no-image-icon-6.png" }
                //image from https://www.freeiconspng.com/img/23485"
            }

            return book;
        })

        return cleanedData
    }


render() {
    const sortedBooks = this.state.books.sort((a, b) => {
        if(this.state.sort === 'Newest') {
            return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        }
        else if(this.state.sort === 'Oldest') {
            return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        }
    })

    return (
        <div className="home-search">
            <img className='image' src={bookImg} alt="Book image"/>
            <h1 className='title'>Bookworm</h1>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
            <h3>Library in your pocket, Search your favorite books or find something new!</h3>
            <SearchedBooks books={sortedBooks} />
         </div>
    )
}
}

export default HomeSearch;