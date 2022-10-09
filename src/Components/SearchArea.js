import React from 'react';

import '../Home.css'

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
            <input className= "search" onChange={props.handleSearch} placeholder="Search books by Title, Author, or Keyword" type="text"/>
            <button className="search-button" type="submit">Search</button>
            <select className="sort-button" defaultValue="Sort" onChange={props.handleSort}>
                <option disabled value="Sort">Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </form>
        </div>
    )
}

export default SearchArea;