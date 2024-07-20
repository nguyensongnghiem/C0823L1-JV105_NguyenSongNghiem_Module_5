import { useState } from 'react'
import { BrowserRouter, NavLink, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import BookList from './books/bookList/BookList'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookCreate from './books/bookCreate/BookCreate'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {  
  const [books, setBooks] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/books" element={<BookList books={books} setBooks={setBooks} />}></Route>
      <Route path="/books/create" element={<BookCreate setBooks={setBooks} />}></Route>
      
      </Routes>
      <ToastContainer />
    </ BrowserRouter>
  )
}

export default App
