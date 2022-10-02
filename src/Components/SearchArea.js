import React from 'react';

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
            <input className= "search" onChange={props.handleSearch} placeholder="Search books by Title, Author, or Genre" type="text"/>
            <button type="submit">Search</button>
        </form>
        </div>
    )
}

export default SearchArea;