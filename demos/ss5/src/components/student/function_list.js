import {useEffect, useState} from "react";
import style from "./function_list.module.css";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import StudentCreate from "./create";

function StudentListFunc(props) {
    const [students, setStudents] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(1)
        //     Call hàm tìm kiếm khi search bị thay đổi
        //     call API để lấy danh sách
        setStudents([
            {
                id: 1,
                name: "HaiTT",
                address: 'Quảng nam',
                point: 9
            },
            {
                id: 2,
                name: "HaiTT2",
                address: 'Quảng nam2',
                point: 5
            }
        ])
    }, []);

    // useEffect(() => {
    // //     clean up
    //     return () => {
    //         alert(1)
    //     }
    // }, [])

    const addStudent = () => {
        setStudents(prevState => {
            const student = {id: 1, name: "haiTT", address: "Quảng Nam", point: 9}
            return [...prevState, student];
        })
    }

    const changeCount = () => {
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Danh sách học sinh {props.nameClass}</h1>
            <button>  <NavLink to="/student/create">Thêm mới</NavLink></button>
            <table>
                <thead>
                <tr>
                    <td>Mã học sinh</td>
                    <td>Tên học sinh</td>
                    <td>Địa chỉ</td>
                    <td>Xếp loại</td>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((student, index) =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                            <td>
                                {student.point > 7 ? "Giỏi" : "Trung bình"}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={changeCount}>Delete</button>
        </div>
    )
}

export default StudentListFunc;