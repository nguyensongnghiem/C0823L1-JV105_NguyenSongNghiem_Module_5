import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {BrowserRouter, Link, useNavigate} from "react-router-dom";
import * as studentService from "../../services/StudentService";
import {useDispatch} from "react-redux";
import {saveStudentMiddleware} from "../../redux/middleware/StudentMiddleware";

function StudentCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const student = {
        name: "",
        address: "",
        point: ""
    }

    const validateStudent = {
        name: Yup.string().required("Tên không được để trống")
            .min(3,"Tên không được nhỏ hơn 3 ký tự")
            .max(100, "Tên không được dài quá 100 ký tự")
            .matches(/^[A-Za-z ]{3,100}$/, "Tên không đúng định dạng. Ví dụ: Le A")
    }

    const saveStudent = async (value) => {
        console.log(value)
        console.log(student)
        value.point = +value.point
        dispatch(saveStudentMiddleware(value))
        toast.success("Thêm mới thành công")
        navigate("/student")
    }

    return (
        <>

            <Formik initialValues={student} onSubmit={saveStudent} validationSchema={Yup.object(validateStudent)}>
                <Form>
                    <label>Name: </label>
                    <Field name="name"></Field>
                    <ErrorMessage name="name" component="span"></ErrorMessage> <br></br>
                    <label>Address: </label>
                    <Field name="address"></Field><br></br>
                    <label>Point: </label>
                    <Field name="point"></Field><br></br>
                    <button type="submit">Thêm mới</button>
                </Form>
            </Formik>
        </>
    )
}
export default StudentCreate;