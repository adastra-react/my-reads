import React from 'react'
import { Link } from 'react-router-dom';
import SearchedBook from './SearchedBook'

function Search({ updateShelf, filteredBooks, searchBooks }) {
  return (
    <div className="search-books">
    <div className="search-books-bar">
        <Link to='/'>
            <button className="close-search">Close</button>
        </Link>
      <div className="search-books-input-wrapper">
        <input type="text" onChange={(e) => searchBooks(e.target.value)} placeholder="Search by title or author"/>
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {filteredBooks.map(searchedBook => (<SearchedBook searchedBook={searchedBook} key={searchedBook.id} updateOption={updateShelf}/>))}
      </ol>
    </div>
  </div>
  )
}

export default Search