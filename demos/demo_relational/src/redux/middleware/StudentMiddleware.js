import * as studentService from "../../services/StudentService"

export const getAllStudentMiddleware = () => async (dispatch) => {
    const students = await studentService.getAllStudents("");
    dispatch({
        type: "GET_ALL_STUDENT",
        payload: students
    })
}

export const saveStudentMiddleware = (student) => async (dispatch) => {
    await studentService.saveStudent(student)
    dispatch({
        type: "ADD_STUDENT",
        payload: student
    })
}