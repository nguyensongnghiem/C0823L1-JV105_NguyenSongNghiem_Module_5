import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {BrowserRouter, Link, useNavigate} from "react-router-dom";
import * as studentService from "../../services/StudentService";
import * as classroomService from "../../services/ClassroomService"
import {useDispatch} from "react-redux";
import {saveStudentMiddleware} from "../../redux/middleware/StudentMiddleware";
import {useEffect, useState} from "react";
import {getAllClassroom} from "../../services/ClassroomService";

function StudentCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [classrooms, setClassrooms] =useState([]);
    const student = {
        name: "",
        address: "",
        point: "",
        classroom: ""
    }

    useEffect(() => {
        getAllClass();
    }, []);

    const getAllClass = async () => {
        const classrooms = await classroomService.getAllClassroom();
        setClassrooms(classrooms)
    }

    const validateStudent = {
        name: Yup.string().required("Tên không được để trống")
            .min(3,"Tên không được nhỏ hơn 3 ký tự")
            .max(100, "Tên không được dài quá 100 ký tự")
            .matches(/^[A-Za-z ]{3,100}$/, "Tên không đúng định dạng. Ví dụ: Le A"),
        classroom: Yup.string().required("Vui lòng chọn lớp")
    }

    const saveStudent = async (value) => {
        console.log(value)
        console.log(student)
        value.point = +value.point
        value.classroom = JSON.parse(value.classroom)
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
                    <Field as="select" name="classroom">
                        <option value="">Chọn lớp</option>
                        { classrooms.map(classroom => (
                            <option key={classroom.id} value={JSON.stringify(classroom)}>{classroom.name}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="classroom" component="span"></ErrorMessage> <br></br>
                    <button type="submit">Thêm mới</button>
                </Form>
            </Formik>
        </>
    )
}
export default StudentCreate;