import axios from "axios";

export const getAllStudents = async (name) => {
    try {
        let result = await axios.get("http://localhost:8080/students?name_like="+name)
        return result.data
    } catch (err) {
        console.log(err)
    }
}

export  const saveStudent = async (student) => {
    try {
        await axios.post("http://localhost:8080/students", student)
        return true
    } catch (err) {
        return false
    }
}