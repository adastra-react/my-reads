import React from 'react'

function Book({ searchedBook, updateShelf }) {
// console.log(searchedBook)
  // Checks this status of the current book then store the value.
  let shelfValue = (searchedBook.shelf)
  ? searchedBook.shelf
  : 'move'

  return (
    //Singular book component being dsiplayed inside the shelf.js map function
    <li>
        <div className="book">
        <div className="book-top">
            <div className="book-cover"
             style={{ width: 128, height: 193,  backgroundImage:
              searchedBook.imageLinks === null || searchedBook.imageLinks === undefined
                ? ""
                : `url(${searchedBook.imageLinks.thumbnail}` }}
             ></div>
            <div className="book-shelf-changer">
            <select
              value={shelfValue}
              onChange={(e) => updateShelf(searchedBook, "read")}
            >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
        </div>
        <div className="book-title">{searchedBook.title}</div>
        {searchedBook.authors
            .map((author, index) => (
              <div key={index} className="book-authors">{author}</div>
            ))}
        </div>
    </li>
  )
}

export default Book