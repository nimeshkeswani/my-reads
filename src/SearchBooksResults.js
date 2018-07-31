import React, { Component } from 'react';
import Book from './Book'

class SearchBooksResults extends Component {

	render() {

		const { searchResults } = this.props

		return (
            <div className="search-books-results">
              <ol className="books-grid">
              
              {
              	searchResults.length >= 1 && (
              		searchResults.map((book) => (
                		<Book key={book.id} title={book.title} authors={book.authors} imageLinks={book.imageLinks}/>
                		))
              	)
              }
              
              </ol>
            </div>
			)
	}
}

export default SearchBooksResults