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
	
	componentDidMount() {
		//console.log('componentDidMount')
		//this.searchBooks(this.state.searchTerm)
	}
	
	componentDidUpdate(prevProps, prevState) {
	  //console.log('componentDidUpdate')
	  if (this.state.searchTerm !== prevState.searchTerm) {
	  	this.searchBooks()
	  }
	}


	render() {
		//console.log('render')
		//console.log(this.state.searchTerm)
		//console.log(this.state.searchResults)
		return (
			<div className="search-books">
            	<SearchBooksBar searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>
            	<SearchBooksResults searchResults={this.state.searchResults} changeShelf={this.props.changeShelf} />
            </div>
			)
	}
}

export default SearchBooks


