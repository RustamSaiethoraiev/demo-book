import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddBook from './components/AddBook';
import Dashboard from './components/Dashboard';
import Edit from './components/Edit'
import api from './api/books';

function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const getAllBooks = async () => {
      const allBooks = await request();
      if (allBooks) {
        setBooks(allBooks);
      }
    }
    getAllBooks();
  }, [books.id])
  const request = async () => {
    const response = await api.get("/books");
    return response.data;
  }
  const addBook = async (book) => {
    const response = await api.post("/books", book).then()
    if (response.status === 201) {
      alert("Database updated successfully!")
    }
    setBooks([...books, book])
  }
  const deleteBook = async (id) => {
    await api.delete(`/books/${id}`);
    const newBooksList = books.filter(
      (book) => { return +book.id !== +id }
    );
    setBooks(newBooksList);
  }
  const updateBook = async (book) => {
    const response = await api.put(`/books/${book.id}`, book)
    if (response.status === 200) {
      alert("Database updated successfully!")
    }
    const { id } = response.data;
    setBooks(
      books.map((book) => {
        return book.id === id ? { ...response.data } : book;
      })
    );
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (<Dashboard
              {...props}
              books={books}
              deleteBook={deleteBook} />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddBook
                {...props}
                books={books}
                addBook={addBook} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <Edit
                {...props}
                books={books}
                updateBook={updateBook} />
            )}
          />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
