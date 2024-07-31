import { ADD_BOOKS, DELETE_ALL_BOOKS, DELETE_BOOK } from "../constants";
import { v4 as uuiv4 } from "uuid";

const initialState = {
  books: [],
};

const helperAddDate = (action) => {
  return {
    id: uuiv4(),
    title: action.payload.title,
    author: action.payload.author,
  };
};

const removeDataById = (prevState, id) => {
  const books = prevState.filter((book) => book.id !== id);
  return books;
};

const reducerAddBooks = (prevState = initialState.books, action) => {
  if (localStorage.getItem("booksData")) {
    prevState = JSON.parse(localStorage.getItem("booksData"));
  }

  switch (action.type) {
    case ADD_BOOKS:
      prevState = [...prevState, helperAddDate(action)];
      localStorage.setItem("booksData", JSON.stringify(prevState));
      return prevState;
    case DELETE_BOOK:
      prevState = removeDataById(prevState, action.payload);
      localStorage.setItem("booksData", JSON.stringify(prevState));
      return prevState;
    case DELETE_ALL_BOOKS:
      prevState = [];
      localStorage.clear();
      return prevState;

    default:
      return prevState;
  }
};

export default reducerAddBooks;
