import axios from "axios";

export const getCategories = async () => {
    try {
        let result = await axios.get("http://localhost:3000/categories");

        return result.data;
    } catch (error) {
        console.log(error);
    }
};