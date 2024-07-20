import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {BrowserRouter, Link, useNavigate} from "react-router-dom";

function StudentCreate() {
    const navigate = useNavigate();
    const student = {
        id: 0,
        name: "",
        address: "",
        point: ""
    }

    const validateStudent = {
        id: Yup.number().required("Id không được để trống")
            .min(0, "Id không được nhỏ hơn 0")
            .max(1242423423423, "Id không được lớn hơn 1242423423423"),
        name: Yup.string().required("Tên không được để trống")
            .min(3,"Tên không được nhỏ hơn 3 ký tự")
            .max(100, "Tên không được dài quá 100 ký tự")
            .matches(/^[A-Za-z ]{3,100}$/, "Tên không đúng định dạng. Ví dụ: Le A")
    }

    const saveStudent = (value) => {
        console.log(value)
        console.log(student)
        value.id = +value.id
        value.point = +value.point
        toast.success("Thêm mới thành công")
        navigate("/student")
    }

    return (
        <>

            <Formik initialValues={student} onSubmit={saveStudent} validationSchema={Yup.object(validateStudent)}>
                <Form>
                    <label>Id: </label>
                    <Field name="id"></Field>
                    <ErrorMessage name="id" component="span"></ErrorMessage> <br></br>
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
