import React, {useState, useEffect} from 'react'
import "../App.css"
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from './context/app.context'


const SearchedBooks = () => {

    const [volumeInfo, setVolumeInfo] = useState([]);

    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();


    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    }


        useEffect(() => {
            axios
                .get(API_URL)
                .then(res=> {
                console.log(res.data)
                setBooks(res.data)
            }).catch((err) => console.log(err))
        },[]);

    return (
        <div className='searched-books'>
            {volumeInfo.map((volumeInfo) => (
                <div key={volumeInfo.id} className="book-card">
                    <div>
                        <h4>{volumeInfo.title}</h4>
                    </div>
                    <div>
                        <h5>{volumeInfo.authors}</h5>
                    </div>
                    <div>
                        <img src={volumeInfo.imageLinks} alt="#"/>
                    </div>
                    <div>
                        {favoritesChecker(book.id) ? (
                            <button onClick={()=> removeFromFavorites(book.id)}>Remove From Favorites</button>
                        ) : (
                            <button onClick={()=> addToFavorites(book)}>Add to Favorites</button>
                        )
                    }
                        
                    </div>

                </div>
            ))}
        </div>
    )
}

export default SearchedBooks