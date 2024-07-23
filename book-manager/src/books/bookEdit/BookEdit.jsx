import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { updateBook } from "../../services/bookService.jsx";
import { getBook } from "../../services/bookService";
import { toast } from "react-toastify";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { getCategories } from "../../services/categoryService.jsx";

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
    getAllCategory();
  }, []);
  const getAllCategory = async () => {
    const fetchedData = await getCategories();
    console.log(fetchedData);
    setCategories(fetchedData);
  };

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
      .min(1, "Số lượng phải lớn hơn 0")
      .typeError("Yêu cầu nhập số"),
  };
  const handleSubmit = async (value) => {
    console.log("Sau khi sửa" + value);
    value.quantity = +value.quantity;
    value.category = JSON.parse(value.category);
    await updateBook(value);
    toast.success("cập nhật thành công");
    navigate("/books");
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h2>Sửa sách</h2>
      <div className="d-flex justify-content-start align-items-start vh-100">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initBook}
          validationSchema={Yup.object(validate)}
        >
          <div className="card p-4 shadow-sm w-50">
            <Form>
              <Field name="id" className="form-control" type="hidden"></Field>
              <div className="form-group">
                <label className="form-label fw-bold">Tên sách</label>
                <Field name="title" className="form-control"></Field>
                <ErrorMessage
                  className="text-danger"
                  name="title"
                  component="div"
                ></ErrorMessage>
              </div>
              <div className="form-group">
                <label className="form-label fw-bold">Tên tác giả</label>
                <Field name="author" className="form-control"></Field>
                <ErrorMessage
                  className="text-danger"
                  name="author"
                  component="div"
                ></ErrorMessage>
              </div>
              <div className="form-group">
                <label className="form-label fw-bold"> Danh mục </label>
                <Field name="category" as="select" className="form-select">
                  {categories.map((cat) => {
                    return (
                      <option key={cat.id} value={JSON.stringify(cat)}>
                        {cat.name}
                      </option>
                    );
                  })}
                </Field>
              </div>
              <div className="form-group">
                <label className="form-label fw-bold">Ngày xuất bản</label>
                <Field
                  name="publishedDate"
                  className="form-control"
                  type="date"
                ></Field>
                <ErrorMessage
                  className="text-danger"
                  name="publishedDate"
                  component="div"
                ></ErrorMessage>
              </div>
              <div className="form-group">
                <label className="form-label fw-bold">Số lượng</label>
                <Field name="quantity" className="form-control"></Field>
                <ErrorMessage
                  className="text-danger"
                  name="quantity"
                  component="div"
                ></ErrorMessage>
              </div>
              <button type="submit" className="btn btn-warning my-3 ">
                Cập nhật
              </button>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  );
};

export default BookEdit;
