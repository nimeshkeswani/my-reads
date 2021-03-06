import React, { Fragment } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  
  state = {
    books: [],
    currentlyReading: [],
    read: [],
    wantToRead: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(data => {
      this.setState(() => ({
        books: data,
        currentlyReading: data.filter((book) => book.shelf === 'currentlyReading').map((book) => book.id),
        read: data.filter((book) => book.shelf === 'read').map((book) => book.id),
        wantToRead: data.filter((book) => book.shelf === 'wantToRead').map((book) => book.id)
      }))
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(data => {
      this.setState((prevState) => ({
        books: this.state.books.map(bk => bk.id).includes(book.id) ? prevState.books : prevState.books.concat(book),
        currentlyReading: data.currentlyReading,
        read: data.read,
        wantToRead: data.wantToRead
      }))
    })
  }

  render() {
    return (
      <div className="app">
	<Router basename={process.env.PUBLIC_URL}>
        <Fragment>
	<Route exact path='/search' render={() => (
          <SearchBooks currentlyReading={this.state.currentlyReading} read={this.state.read} wantToRead={this.state.wantToRead} changeShelf={this.changeShelf} />
          )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <BookShelf key='currentlyReading' shelfName='Currently Reading' currentlyReading={this.state.currentlyReading} read={this.state.read} wantToRead={this.state.wantToRead} books={this.state.books.filter((book) => this.state.currentlyReading.includes(book.id) )} changeShelf={this.changeShelf} />
                  <BookShelf key='wantToRead' shelfName='Want To Read' currentlyReading={this.state.currentlyReading} read={this.state.read} wantToRead={this.state.wantToRead} books={this.state.books.filter((book) => this.state.wantToRead.includes(book.id) )} changeShelf={this.changeShelf} />
                  <BookShelf key='read' shelfName='Read' currentlyReading={this.state.currentlyReading} read={this.state.read} wantToRead={this.state.wantToRead} books={this.state.books.filter((book) => this.state.read.includes(book.id) )} changeShelf={this.changeShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
          )} />
	</Fragment>
	</Router>
      </div>
    )
  }
}

export default BooksApp
