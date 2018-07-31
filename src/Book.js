import React, { Component } from 'react';

class Book extends Component {
	render() {

		const { title, authors, imageLinks } = this.props

		//console.log(id, title, authors, imageURL);

		return (
			<li>
				<div className="book">
				  <div className="book-top">
				    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks !== undefined ? imageLinks.thumbnail : null })` }}></div>
				    <div className="book-shelf-changer">
				      <select>
				        <option value="move" disabled>Move to...</option>
				        <option value="currentlyReading">Currently Reading</option>
				        <option value="wantToRead">Want to Read</option>
				        <option value="read">Read</option>
				        <option value="none">None</option>
				      </select>
				    </div>
				  </div>
				  <div className="book-title">{title}</div>
				  <div className="book-authors">{authors ? authors.join(', ') : ''}</div>
				</div>
			</li>
			)
	}
}

export default Book