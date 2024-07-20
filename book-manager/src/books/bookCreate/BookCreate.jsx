import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import { saveBook } from "../../services/bookService";
function BookCreate() {
    const navigate = useNavigate()
  const initBook = {
    id : "",
    title: "",
    author: "",
    publishedDate: "",
    quantity: "",
  };
  const validate = {
    title: Yup.string().required("Tên sách không để trống"),
    author: Yup.string().required("Tên tác giả không để trống"),
    publishedDate: Yup.date().required("Không để trống"),
    quantity: Yup.number()
      .required("Không để trống")
      .min(1, "Số lượng phải lớn hơn 0"),
  };

 
  const handleSubmit = async (value) => {
    console.log(value)
    value.quantity = +value.quantity
    await saveBook(value)
    toast.success("Thêm mới thành công")
    navigate("/books")
  };
  return (
    <>
      <h2>Thêm mới sách</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initBook}
        validationSchema={Yup.object(validate)}
      >
        <Form>
          <label className="form-label fw-bold">Tên sách</label>
          <Field name="title" className="form-control"></Field>
          <ErrorMessage className = "text-danger" name="title" component="span"></ErrorMessage> <br></br>
          <label className="form-label">Tên tác giả</label>
          <Field name="author" className="form-control"></Field>
          <ErrorMessage className = "text-danger" name="author" component="span"></ErrorMessage> <br></br>
          <label className="form-label">Ngày xuất bản</label>
          <Field name="publishedDate" className="" type="date"></Field>
          <ErrorMessage className = "text-danger" name="publishedDate" component="span"></ErrorMessage> <br></br>
          <label className="form-label">Số lượng</label>
          <Field name="quantity" className="form-control"></Field>
          <ErrorMessage className = "text-danger" name="quantity" component="span"></ErrorMessage> <br></br>
          <button type="submit" className="btn btn-warning">Thêm mới </button>
        </Form>
      </Formik>
    </>
  );
}

export default BookCreate;
