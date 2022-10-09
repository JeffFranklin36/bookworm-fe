import React, {useEffect, useState} from 'react';
// import { useAppContext } from './context/app.context'
import axios from 'axios'

import '../Home.css'



const BookCard = (props) => {

    // const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

    // useEffect(() => {
    //     return () => saveBookIds(savedBookIds);
    //   });

    // const handleSaveBook = async (bookId) => {
    //     const bookToSave = searchedBooks.find((book) => book.bookId === bookId);
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;
    
    //     if (!token) {
    //       return false;
    //     }
    
    //     try {
    //       const { data } = await saveBook({
    //         variables: { newBook: { ...bookToSave } },
    //       });
    
    //       setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };

    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
            <button className="save-button">
                Save button
            {/* disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveBook(book.bookId)}>
                      {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                        ? 'This book has already been saved!'
                        : 'Save this Book!'} */}
            </button>
                <h3>{props.title}</h3>
                <h5>Author: {props.author}</h5>
                <p>Published Date: {props.published === '0000' ? 'Not Available' : props.published.substring(0, 4)}</p>
                <h5 className="desc-title">Description:</h5>
                <h5 className="description">{props.desc}</h5>
            </div>
        </div>
    )
}

export default BookCard