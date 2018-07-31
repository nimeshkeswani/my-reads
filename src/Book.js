import React, { Component } from 'react';

class Book extends Component {
	render() {

		const { book, currentlyReading, read, wantToRead, changeShelf } = this.props

		//console.log(id, title, authors, imageURL);

		return (
			<li>
				<div className="book">
				  <div className="book-top">
				    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail : null })` }}></div>
				    <div className="book-shelf-changer">
				      <select value={currentlyReading.includes(book.id) ? 'currentlyReading' : read.includes(book.id) ? 'read' : wantToRead.includes(book.id) ? 'wantToRead' : 'none'} onChange={(event) => changeShelf(book, event.target.value)}>
				        <option value="move" disabled>Move to...</option>
				        <option value="currentlyReading">Currently Reading</option>
				        <option value="wantToRead">Want to Read</option>
				        <option value="read">Read</option>
				        <option value="none">None</option>
				      </select>
				    </div>
				  </div>
				  <div className="book-title">{book.title}</div>
				  <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
				</div>
			</li>
			)
	}
}

export default Book