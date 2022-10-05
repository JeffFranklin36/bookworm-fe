import React from 'react'
import "../App.css"
import { useAppContext } from './context/app.context'


const Favorites = () => {

    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();


    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    }

    
    return (
        <div className="favorites">
            {favorites.length > 0 ? favorites.map((volumeInfo) => (
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
            )): 
                <h1>You Do Not Have any Favorites Yet</h1>}
        </div>
    )
}

export default Favorites