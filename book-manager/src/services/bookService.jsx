import axios from "axios";

export const getBooks = async () => {
  try {
    let result = await axios.get("http://localhost:3000/books");
    return  result.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveBook = async (book) => {
    try {
      console.log(book)
      let response = await axios.post("http://localhost:3000/books",book)
      return true
      
    } catch (error) {
      console.log(error);
    }
  };