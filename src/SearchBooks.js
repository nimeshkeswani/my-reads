import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {

	state = {
		searchTerm: '',
		searchResults: []
	}

	updateSearchTerm = (text) => {
		this.setState(() => ({
			searchTerm: text
		}))
	}

	searchBooks = () => {
		this.state.searchTerm !== '' ? (
			BooksAPI.search(this.state.searchTerm)
			.then(data => {
				this.setState(() => ({
					searchResults: data
				}))
			})
		) : (
			this.setState(() => ({
					searchResults: []
				}))
		)
	}
	
	componentDidUpdate(prevProps, prevState) {
	  if (this.state.searchTerm !== prevState.searchTerm) {
	  	this.searchBooks()
	  }
	}


	render() {

		const { currentlyReading, read, wantToRead, changeShelf } = this.props

		return (
			<div className="search-books">
            	<SearchBooksBar searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>
            	<SearchBooksResults searchResults={this.state.searchResults} currentlyReading={currentlyReading} read={read} wantToRead={wantToRead} changeShelf={changeShelf} />
            </div>
			)
	}
}

export default SearchBooks


