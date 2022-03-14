import React from 'react'

function Book({ shelfBook, updateShelf }) {

  // Checks this status of the current book then store the value.
  let shelfValue = (shelfBook.shelf)
  ? shelfBook.shelf
  : 'move'

  return (
    //Singular book component being dsiplayed inside the shelf.js map function
    <li>
        <div className="book">
        <div className="book-top">
            <div className="book-cover"
             style={{ width: 128, height: 193, backgroundImage: `url(${shelfBook.imageLinks.thumbnail})` }}
             ></div>
            <div className="book-shelf-changer">
            <select
              value={shelfValue}
              onChange={(e) => updateShelf(shelfBook, e.target.value)}
            >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
        </div>
        <div className="book-title">{shelfBook.title}</div>
        {shelfBook.author && shelfBook
            .authors
            .map((author, index) => (
              <div key={index} className="book-authors">{author}</div>
            ))}
        </div>
    </li>
  )
}

export default Book