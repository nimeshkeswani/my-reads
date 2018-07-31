import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {

	render() {
		const { shelfName, currentlyReading, read, wantToRead, books, changeShelf } = this.props

		return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelfName}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                	{books.map((book) => (
                		<Book key={book.id} currentlyReading={currentlyReading} read={read} wantToRead={wantToRead} book={book} changeShelf={changeShelf} />
                		))}
                </ol>
              </div>
            </div>
			)
	}
}

export default BookShelf