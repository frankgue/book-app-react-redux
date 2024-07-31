import axios from "axios";
import { FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS } from "../constants";

const fetchBooksLoading = () => {
  return {
    type: FETCH_BOOKS_LOADING,
  };
};

const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

const fetchBooksError = (error) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: error,
  };
};
const GOOGLE_API_KEY = "AIzaSyCel7jZdzNe6y77vgNxLSw39W51zT6o9ls";

export const fetchBooks = (title) => {
  return (dispatch) => {
    dispatch(fetchBooksLoading);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20&key=${GOOGLE_API_KEY}`
      )
      .then((response) => {
        const bookItemsArray = response.data.items;
        dispatch(fetchBooksSuccess(bookItemsArray));
      })
      .catch((error) => {
        dispatch(fetchBooksError(error.message));
      });
  };
};
