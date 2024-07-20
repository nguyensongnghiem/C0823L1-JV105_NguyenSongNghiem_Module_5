import './App.css';
import logo from './logo.svg';
import React, {createElement} from "react";
import StudentList from "./components/student/list";
import StudentListFunc from "./components/student/function_list";


function App() {
    const className = "c08";
    const students = [
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

    ]
    const hello = (name) => {
        alert(`Hello, ${name}!`);
    }

    return (
        // <div id="app">
        //     <h1 className={className} id="c08">Xin chào</h1>
        //     <button onClick={() => hello("haitt")}>Click me</button>
        //     <table>
        //         <thead>
        //         <tr>
        //             <td>Mã học sinh</td>
        //             <td>Tên học sinh</td>
        //             <td>Địa chỉ</td>
        //             <td>Xếp loại</td>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         {
        //             students.map((student, index) =>
        //                 <tr key={student.id}>
        //                     <td>{student.id}</td>
        //                     <td>{student.name}</td>
        //                     <td>{student.address}</td>
        //                     <td>
        //                         {student.point > 7 ?"Giỏi": "Trung bình"}
        //                     </td>
        //                 </tr>
        //             )}
        //         </tbody>
        //     </table>
        // </div>
        <StudentListFunc nameClass = "C0823L1" idClass="1"></StudentListFunc>
    );
}

export default App;
