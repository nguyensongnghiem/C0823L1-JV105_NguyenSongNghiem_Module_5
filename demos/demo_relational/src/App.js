import './App.css';
import React, {useEffect} from "react";

import StudentListFunc from "./components/student/function_list";
import StudentCreate from "./components/student/create";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllStudentMiddleware} from "./redux/middleware/StudentMiddleware";


function App() {
    const dispatch = useDispatch();
    const students = useSelector(store => store.students);

    useEffect(() => {
        dispatch(getAllStudentMiddleware())
    }, []);

    return (
        <>
            <h1>Quản lý</h1>
            <p>Số lượng học sinh {students.length}</p>
            <BrowserRouter>
                <NavLink to="/student">Danh sách</NavLink>
                <NavLink to="/student/create">Thêm mới</NavLink>
                <Routes>
                    <Route path="/student" element={<StudentListFunc/>}></Route>
                    <Route path="/student/create" element={<StudentCreate/>}></Route>
                </Routes>
            </BrowserRouter>

            <ToastContainer />
        </>
    );
}

export default App;
