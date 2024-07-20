import './App.css';
import React from "react";

import StudentListFunc from "./components/student/function_list";
import StudentCreate from "./components/student/create";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";


function App() {

    return (
        <>  
            <h1>Quản lý</h1>
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
