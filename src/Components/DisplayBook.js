import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom'
import axios from 'axios'
import '../Home.css'



export default function DisplayBook(props) {

    const [book, setBook] = useState({
            image={book.volumeInfo.imageLinks.thumbnail},
            title={book.volumeInfo.title},
            author={book.volumeInfo.authors},
            published={book.volumeInfo.publishedDate},
            id={book.id},
            description={book.volumeInfo.description}
});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(res => {
            setBook(res.data)
        }).catch(err=> console.log(err))
    },[id])

    return (
        <div className="display-book">
            <img src={book.volumeInfo.image} alt=""/>
            <div className="desc">
                <h3>{book.volumeInfo.title}</h3>
                <h5>Author: {book.volumeInfo.author}</h5>
                <p>Published {book.volumeInfo.published}</p>
                <p>Description: {book.volumeInfo.description}</p>
                {/* <div>
                        {favoritesChecker(book.id) ? (
                            <button onClick={()=> removeFromFavorites(book.id)}>Remove From Favorites</button>
                        ) : (
                            <button onClick={()=> addToFavorites(book)}>Add to Favorites</button>
                        )
                    }
                </div> */}
            </div>
        </div>
    )
}