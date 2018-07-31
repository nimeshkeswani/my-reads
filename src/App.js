import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Link, Route } from 'react-router-dom';
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
    console.log(book, shelf)
    BooksAPI.update(book, shelf)
    .then(data => {
      this.setState(() => ({
        currentlyReading: data.currentlyReading,
        read: data.read,
        wantToRead: data.wantToRead
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks changeShelf={this.changeShelf} />
          )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <BookShelf key='currentlyReading' shelfName='Currently Reading' books={this.state.books.filter((book) => this.state.currentlyReading.includes(book.id) )} changeShelf={this.changeShelf} />
                  <BookShelf key='read' shelfName='Read' books={this.state.books.filter((book) => this.state.read.includes(book.id) )} changeShelf={this.changeShelf} />
                  <BookShelf key='wantToRead' shelfName='Want To Read' books={this.state.books.filter((book) => this.state.wantToRead.includes(book.id) )} changeShelf={this.changeShelf} />
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
