import React from 'react';
// import { useAppContext } from './context/app.context'
import {useNavigate} from 'react-router-dom';



const BookCard = (props) => {

    // const {favorites, addToFavorites, removeFromFavorites} = useAppContext();

    // const favoritesChecker = (id) => {
    //     const boolean = favorites.some((book) => book.id === id);
    //     return boolean;
    // }

    return (
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h3>{props.title}</h3>
                <h5>{props.author}</h5>
                <p>Published {props.published}</p>
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

export default BookCard