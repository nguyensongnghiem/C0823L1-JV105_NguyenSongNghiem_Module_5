import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { updateBook } from "../../services/bookService.jsx";
import { getBook } from "../../services/bookService";
import { toast } from "react-toastify";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {getCategories} from "../../services/categoryService.jsx";

const BookEdit = () => {
  const { editBookId } = useParams();
  const [categories, setCategories] = useState([]);
  const [initBook, setInitBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    getBookById(editBookId);
  }, []);
  useEffect(() => {
    getAllCategory()
  }, []);
  const getAllCategory = async () => {
    const fetchedData = await getCategories();
    console.log(fetchedData);
    setCategories(fetchedData)
  }

  const getBookById = async (id) => {
    const book = await getBook(id);
    setInitBook({ ...book, category: JSON.stringify(book.category) });
    setIsLoading(false);
  };

  const validate = {
    title: Yup.string().required("Tên sách không để trống"),
    author: Yup.string().required("Tên tác giả không để trống"),
    publishedDate: Yup.date()
      .required("Không để trống")
      .max(new Date(), "Không được sau ngày hiện tại"),
    quantity: Yup.number()
      .required("Không để trống")
      .min(1, "Số lượng phải lớn hơn 0"),
  };
  const handleSubmit = async (value) => {
    console.log("Sau khi sửa" + value);
    value.quantity = +value.quantity;
    await updateBook(value);
    toast.success("cập nhật thành công");
    navigate("/books");
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2>Sửa sách</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initBook}
        validationSchema={Yup.object(validate)}
      >
        <div className="card p-2 shadow-sm w-25">
          <Form>
            <Field name="id" className="form-control" type="hidden"></Field>
            <div className="form-group">
              <label className="form-label fw-bold">Tên sách</label>
              <Field name="title" className="form-control"></Field>
              <ErrorMessage
                  className="text-danger"
                  name="title"
                  component="span"
              ></ErrorMessage>{" "}
              <br></br>
            </div>
            <label className="form-label fw-bold">Tên tác giả</label>
            <Field name="author" className="form-control"></Field>
            <ErrorMessage
                className="text-danger"
                name="author"
                component="span"
            ></ErrorMessage>{" "}
            <br></br>
            <br></br>
            <label className="form-label fw-bold mx-2"> Danh mục </label>
            <Field name="category"  as="select">
              {categories.map((cat) => {
                return <option key={cat.id} value={JSON.stringify(cat)}>{cat.name}</option>
              })}
            </Field>
            <label className="form-label fw-bold">Ngày xuất bản</label>
            <Field name="publishedDate" className="" type="date"></Field>{" "}
            <br></br>
            <ErrorMessage
                className="text-danger"
                name="publishedDate"
                component="span"
            ></ErrorMessage>
            <br></br>
            <label className="form-label fw-bold">Số lượng</label>
            <Field name="quantity" className="form-control"></Field>
            <ErrorMessage
                className="text-danger"
                name="quantity"
                component="span"
            ></ErrorMessage>{" "}
            <br></br>
            <button type="submit" className="btn btn-warning">
              Cập nhật
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default BookEdit;
