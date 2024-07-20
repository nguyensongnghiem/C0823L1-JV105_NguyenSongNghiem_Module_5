import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getBooks } from "../../services/bookService";
import { Link } from "react-router-dom";
function BookList({books,setBooks}) {
  
  useEffect( () => {
    getBookData()
 
  }, []);

  const  getBookData = async () =>{
    const fetchData = await getBooks();    
    setBooks(fetchData);
  }
  console.log(getBooks())
  const list = books.map((book) => {
    return (
      <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.publishedDate}</td>
        <td>{book.quantity}</td>
      </tr>
    );
  });
  return (
    <>
      <h2>Danh sách</h2>
      <Link to="/books/create" className="btn btn-primary m-3">Thêm mới</Link>
      <table className="table  m-3 ">
        <thead className="table-primary">
          <tr>
            <th>Tên sách</th>
            <th>Tên tác giả</th>
            <th>Ngày xuất bản </th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  );
}

export default BookList;
