import React, { Component } from 'react';
import Book from './Book'

class SearchBooksResults extends Component {

	render() {

		const { searchResults, currentlyReading, read, wantToRead, changeShelf } = this.props

		return (
            <div className="search-books-results">
              <ol className="books-grid">
              
              {
              	searchResults.length >= 1 && (
              		searchResults.map((book) => (
                		<Book key={book.id} book={book} currentlyReading={currentlyReading} read={read} wantToRead={wantToRead} changeShelf={changeShelf} />
                		))
              	)
              }
              
              </ol>
            </div>
			)
	}
}

export default SearchBooksResults