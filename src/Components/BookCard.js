import React, {useEffect, useState} from 'react';
// import { useAppContext } from './context/app.context'
import axios from 'axios'
import Favorites from './Favorites'


import '../Home.css'



const BookCard = (props) => {

    

    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
            <Favorites />
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