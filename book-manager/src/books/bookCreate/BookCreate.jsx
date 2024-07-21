import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { saveBook } from "../../services/bookService";
function BookCreate() {
  const navigate = useNavigate();
  const initBook = {
    id: "",
    title: "",
    author: "",
    publishedDate: "",
    quantity: "",
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
    value.quantity = +value.quantity;
    await saveBook(value);
    toast.success("Thêm mới thành công");
    navigate("/books");
  };
  return (
    <>
      <h2>Thêm mới sách</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initBook}
        validationSchema={Yup.object(validate)}
      >
        <div className="card p-2 shadow-sm w-25">
          <Form>
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
            <label className="form-label fw-bold">Ngày xuất bản</label>
            <Field name="publishedDate" className="" type="date"></Field>{" "}
            <br></br>
            <ErrorMessage
              className="text-danger"
              name="publishedDate"
              component="span"
            ></ErrorMessage>{" "}
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
              Thêm mới{" "}
            </button>
          </Form>
        </div>
      </Formik>
    </>
  );
}

export default BookCreate;
