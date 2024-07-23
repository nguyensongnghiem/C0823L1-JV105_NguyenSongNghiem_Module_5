import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bookService from "../../services/bookService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { Field, Form, Formik } from "formik";
import { getCategories } from "../../services/categoryService.jsx";
import moment from "moment";

function BookList() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  const [isShowModal, setIsShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getAllCategory = async () => {
      const fetchedData = await getCategories();
      console.log(fetchedData);
      setCategories(fetchedData);
    };
    getAllCategory();
  }, []);

  useEffect(() => {
    getBookData();
  }, []);

  const searchBookData = async (searchInfo) => {
    const fetchData = await bookService.searchBooks(searchInfo);
    console.log(fetchData);
    setBooks(fetchData);
  };
  const getBookData = async () => {
    const fetchData = await bookService.getBooks();
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
    console.log(value);
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
      <div className="container my-5">
        <h2 className="mb-4">Danh sách</h2>
        <div className="d-flex mb-3">
          <Link to="/books/create" className="btn btn-primary">
            Thêm mới
          </Link>
        </div>
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-secondary text-white">Tìm kiếm</div>
          <div className="card-body">
            <Formik
              initialValues={{
                title: "",
                startDate: "",
                stopDate: "",
                category: "",
              }}
              onSubmit={onSearchSubmit}
            >
              <Form>
                <div className="row g-3 align-items-center">
                  <div className="col-auto">
                    <label className="col-form-label fw-bold">Tên sách</label>
                  </div>
                  <div className="col-auto">
                    <Field name="title" className="form-control"></Field>
                  </div>
                  <div className="col-auto">
                    <label className="col-form-label fw-bold">
                      Ngày bắt đầu
                    </label>
                  </div>
                  <div className="col-auto">
                    <Field
                      name="startDate"
                      type="date"
                      className="form-control"
                    ></Field>
                  </div>
                  <div className="col-auto">
                    <label className="col-form-label fw-bold">
                      Ngày kết thúc
                    </label>
                  </div>
                  <div className="col-auto">
                    <Field
                      name="stopDate"
                      type="date"
                      className="form-control"
                    ></Field>
                  </div>
                  <div className="col-auto">
                    <label className="col-form-label fw-bold me-2">
                      Danh mục{" "}
                    </label>
                  </div>
                  <div className="col-auto">
                    <Field name="category" as="select" className="form-select">
                      <option value="">- Tìm tất cả -</option>
                      {categories.map((cat) => {
                        return (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary">
                      Tìm
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>

        <table className="table table-striped table-hover shadow-sm">
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
      </div>
    </>
  );
}

export default BookList;
