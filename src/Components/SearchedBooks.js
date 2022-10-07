import React from 'react';
import BookCard from './BookCard'

import '../Home.css'



const SearchedBooks = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    console.log("book",book)
                   return <BookCard 
                            key={i}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            published={book.volumeInfo.publishedDate}
                            id={book.id}
                            /> 
                })
            }
        </div>
    )
}

export default SearchedBooks