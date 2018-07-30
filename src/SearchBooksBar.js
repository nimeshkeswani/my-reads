import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class SearchBooksBar extends Component {

	render() {

		const { searchTerm, updateSearchTerm } = this.props

		return (
			<div className="search-books-bar">
				<Link to='/' className='close-search'>Close</Link>
				<div className="search-books-input-wrapper">

				<input type="text" placeholder="Search by title or author" value={searchTerm} onChange={(event) => {updateSearchTerm(event.target.value)}}/>

				</div>
			</div>
			)
	}
}

export default SearchBooksBar