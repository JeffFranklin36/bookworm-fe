import React, {useState, useEffect} from 'react'
import "../App.css"
import {useParams } from 'react-router-dom'
import axios from 'axios'
import { DISPLAY_BOOK_URL } from '../API'


const DisplayBook = () => {

    const [volumeInfo, setVolumeInfo] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${DISPLAY_BOOK_URL}/${id}`)
        .then(res => {
            setVolumeInfo(res.data)
        }).catch(err=> console.log(err))
    },[id])


    return (
        <div className="display-book">
            <div>
                <h2>{volumeInfo.title}</h2>
            </div>
            <div>
                <h3>{volumeInfo.authors}</h3>
            </div>
            <div>
                <img src ={volumeInfo.imageLinks} alt="#" />
            </div>
            <div>
                <h2>Discription</h2>
                <p>{volumeInfo.discription}</p>
            </div>
        </div>
    )
}

export default DisplayBook