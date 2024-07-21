import { useState } from "react";
import { BrowserRouter, NavLink, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BookList from "./books/bookList/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCreate from "./books/bookCreate/BookCreate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookEdit from "./books/bookEdit/BookEdit.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<BookList />}></Route>
        <Route path="/books/create" element={<BookCreate />}></Route>
        <Route path="/books/edit/:editBookId" element={<BookEdit />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
