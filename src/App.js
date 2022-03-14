import React, { useState, useEffect } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import axios from 'axios'
import Search from './Components/Search';
import Shelf from './Components/Shelf';

function App() {

  // const [showSearchPage, setShowSearchPage] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Search for book in the database
  const searchBooks = (query) => {
    if (query) {
      BooksAPI
        .search(query)
        .then((result) => {
          updateSearchedResult(result)
          if (result.error !== 'empty query') {
            setFilteredBooks(result)
          } else {
            setFilteredBooks([])
          }
        })
    } else {
      setFilteredBooks([])
    }
  }

  // Updates the book shelf when a user selects an option from the dropdown
  const updateShelf = (book, shelf) => {
      BooksAPI
      .update(book, shelf)
      .then(updated => (BooksAPI.getAll().then((books) => {
        setAllBooks(books)
        updateSearchedResult(filteredBooks)
      })))
  }

  // If there is a book match then it is updated on the /search page
  const updateSearchedResult = (values) => {
    for (var value of values) {
      for (let book of allBooks) {
        if (value.id === book.id) {
          value.shelf = book.shelf
        }
      }
    }
    console.log(values)
    setFilteredBooks(values)
  }

  // gets all books upon page first render
  useEffect(() => {
    let isMounted = true;
      BooksAPI.getAll()
      .then((books) => {
        if(isMounted){
          setAllBooks(books);
        }
      })

      // Unmounts the action to prevent a memory leak
      return () => {
        isMounted = false;
      }
  }, [])
  
  return (
    <Router>
      <div className="app">
      <Routes>
        <Route exact path="/search" element={<Search updateShelf={updateShelf} filteredBooks={filteredBooks} searchBooks={searchBooks} />} />
        <Route exact path="/" element={<Shelf allBooks={allBooks} updateShelf={updateShelf} />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App