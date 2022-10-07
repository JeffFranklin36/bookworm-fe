import React from 'react';

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
            <input className= "search" onChange={props.handleSearch} placeholder="Search books by Title, Author, or Keyword" type="text"/>
            <button type="submit">Search</button>
            <select defaultValue="Sort" onChange={props.handleSort}>
                <option disabled value="Sort">Sort</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </form>
        </div>
    )
}

export default SearchArea;