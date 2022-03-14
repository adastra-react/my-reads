import React from 'react';
import { Link } from 'react-router-dom';
import './Shelf.css'
import Book from './Book';

function Shelf({ allBooks, updateShelf }) {
  return (
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {allBooks.filter((book) => book.shelf === "currentlyReading").map((shelfBook) => {
                        return(
                          <Book shelfBook={shelfBook} key={shelfBook.id} updateShelf={updateShelf} />
                        )
                    })}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {allBooks.filter((book) => book.shelf === "wantToRead").map((shelfBook) => {
                        return(
                          <Book shelfBook={shelfBook} key={shelfBook.id} updateShelf={updateShelf} />
                        )
                    })}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {allBooks.filter((book) => book.shelf === "read").map((shelfBook) => {
                        return(
                          <Book shelfBook={shelfBook} key={shelfBook.id} updateShelf={updateShelf} />
                        )
                    })}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
                <Link to='search'>
                    <button >Add a book</button>
                </Link>
            </div>
          </div>
  )
}

export default Shelf