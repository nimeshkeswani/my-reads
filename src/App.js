import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Link, Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf'

const shelves = [{id: 'currentlyReading', name: 'Currently Reading'}, {id: 'wantToRead', name: 'Want to Read'}, {id: 'read', name: 'Read'}]

class BooksApp extends React.Component {
  
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(data => {
      this.setState(() => ({
        books: data
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks />
          )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map((shelf) => (
                  <BookShelf key={shelf.id} shelfName={shelf.name} books={this.state.books.filter((book) => book.shelf === shelf.id)} />
                  ))}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
