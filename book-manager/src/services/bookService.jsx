import axios from "axios";

export const getBooks = async () => {
  try {
    let result = await axios.get("http://localhost:3000/books");
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBook = async (id) => {
  try {
    let result = await axios.get(`http://localhost:3000/books/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveBook = async (book) => {
  try {
    console.log(book);
    let response = await axios.post("http://localhost:3000/books", book);
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async (id) => {
  try {
    console.log(id);
    let response = await axios.delete(`http://localhost:3000/books/${id}`);
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = async (book) => {
  try {
    console.log(book);
    let response = await axios.put(
      `http://localhost:3000/books/${book.id}`,
      book,
    );
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const searchBooks = async (searchInfo) => {
  try {
    // console.log(searchInfo);
    let response = await axios.get(
      `http://localhost:3000/books?title_like=${searchInfo.title}&category.id_like=${searchInfo.category}`,
    );
    let startDate, stopDate;
    if (searchInfo.startDate === "" && searchInfo.stopDate === "")
      return response.data;
    else if (searchInfo.startDate === "") {
      startDate = new Date("1970-01-01");
      stopDate = new Date(searchInfo.stopDate);
    } else if (searchInfo.stopDate === "") {
      startDate = new Date(searchInfo.startDate);
      stopDate = new Date();
    } else {
      startDate = new Date(searchInfo.startDate);
      stopDate = new Date(searchInfo.stopDate);
    }
    return response.data.filter((book) => {
      const publishedDate = new Date(book.publishedDate);
      return publishedDate >= startDate && publishedDate <= stopDate;
    });
  } catch (error) {
    console.log(error);
  }
};
