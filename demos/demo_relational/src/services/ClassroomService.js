import axios from "axios";

export const getAllClassroom = async () => {
    try {
        let classrooms = await axios.get("http://localhost:8080/classrooms")
        return classrooms.data
    }catch (e) {
        return []
    }

}