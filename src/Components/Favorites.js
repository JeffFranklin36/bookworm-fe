import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'


import Form from 'react-bootstrap/Form';
import '../Home.css'

export default function Favorites () {

    const {id} = useParams()

    const [addFavorite, setAddFavorite] = useState('')

    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const favorites = {addFavorite}
        const URL = `${process.env.REACT_APP_BACKEND_URL}` 
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(favorites),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const data = await response.json()

          if (!response.ok) {
            setError(data.error)
          }
          if (response.ok) {
            setError(null)
            setAddFavorite('')
            console.log('new favorite added:', data);
            
          }
    }
    return (
        <div className="favorites-button">
            <form onSubmit={handleSubmit}>
                <button className="addFavorites" type="submit">Add to Favorites</button>
            </form>

        </div>
    )
}