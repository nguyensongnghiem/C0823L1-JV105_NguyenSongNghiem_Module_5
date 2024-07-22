import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bookService from "../../services/bookService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { Field, Form, Formik } from "formik";
import {getCategories} from "../../services/categoryService.jsx";
import moment from "moment";

function BookList() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  const [isShowModal, setIsShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getAllCategory()
  }, []);

  useEffect(() => {
    getBookData();
  }, []);
  const getAllCategory = async () => {
    const fetchedData = await getCategories();
    console.log(fetchedData);
    setCategories(fetchedData)
  }
  const getBookData = async () => {
    const fetchData = await bookService.getBooks();
    setBooks(fetchData);
  };
  const searchBookData = async (searchInfo) => {
    const fetchData = await bookService.searchBooks(searchInfo);
    console.log(fetchData);
    setBooks(fetchData);
  };

  const handleEdit = (id) => {
    navigate(`/books/edit/${id}`);
  };
  const handleDelete = (id) => {
    setIdToDelete(id);
    showModal();
  };
  const showModal = () => setIsShowModal(true);
  const hideModal = () => setIsShowModal(false);
  const confirmDelete = async () => {
    await bookService.deleteBook(idToDelete);
    getBookData();
    hideModal();
    toast.success("Đã xóa thành công !");
  };
  const onSearchSubmit = (value) => {
    console.log(value)
    searchBookData(value);
  };
  const list = books.map((book) => {
    return (
      <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.category.name}</td>
        <td>{moment(book.publishedDate).format("DD/MM/YYYY")}</td>
        <td>{book.quantity}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => handleEdit(book.id)}
          >
            Sửa
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(book.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h2>Danh sách</h2>
      <Link to="/books/create" className="btn btn-primary m-3">
        Thêm mới
      </Link>
      <Formik
        initialValues={{ title: "", startDate: "", stopDate: "", category:""}}
        onSubmit={onSearchSubmit}
      >
        <Form>
          <div className="">
            <label className="fw-bold">Tên sách</label>
            <Field name="title" className="form-control"></Field>
            <label className="fw-bold">Ngày bắt đầu</label>
            <Field
                name="startDate"
                type="date"
                className="form-control"
            ></Field>
            <label className="fw-bold">Ngày kết thúc</label>
            <Field name="stopDate" type="date" className="form-control"></Field>
            <label className="fw-bold me-2">Danh mục </label>
            <Field name="category" as="select">
              <option value="">- Tìm tất cả -</option>
              {categories.map((cat) => {
                return <option key={cat.id} value={cat.id}>{cat.name}</option>
              })}
            </Field>
            <br></br>
            <button type="submit" className="btn btn-primary m-3">
              Tìm
            </button>
          </div>
        </Form>
      </Formik>

      <table className="table shadow-sm">
        <thead className="table-primary">
        <tr>
          <th>Tên sách</th>
          <th>Tên tác giả</th>
          <th>Danh mục</th>
          <th>Ngày xuất bản</th>
          <th>Số lượng</th>
          <th>Sửa</th>
          <th>Xóa</th>
        </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>

      <Modal show={isShowModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa thông tin !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Xác nhận xóa sách có id {idToDelete} !</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={hideModal}>
            Hủy
          </button>
          <button className="btn btn-danger" onClick={confirmDelete}>
            Xóa
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookList;
