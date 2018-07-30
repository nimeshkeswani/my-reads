import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends Component {
	render() {
		return (
			<div className="search-books">
            	<SearchBooksBar />
            	<SearchBooksResults />
            </div>
			)
	}
}

export default SearchBooks


