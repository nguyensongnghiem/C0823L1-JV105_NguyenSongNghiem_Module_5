import {Component} from "react";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
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

            ],
            count: 5
        }
    }
    delete() {
        // this.setState({
        //     students: this.state.students.splice(0,1)
        // })
        // this.setState({
        //     students: this.state.students.splice(0,1)
        // })
        this.setState((temp) => {
            return {
                count: temp.count + 1
            }
        })
        this.setState(temp => {
            return {
                count: temp.count + 1
            }
        })
        this.setState(temp => {
            return {
                count: temp.count + 1
            }
        })


    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.count)
    }

    render() {
        return (
            <>
                <h1>Count: {this.state.count}</h1>
                <h1>Danh sách học sinh {this.props.nameClass}</h1>
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
                        this.state.students.map((student, index) =>
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
                <button onClick={() => this.delete()}>Delete</button>
            </>
        )
    }
}

export default StudentList;