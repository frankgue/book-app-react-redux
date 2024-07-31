import {
  FETCH_BOOKS_ERRORS,
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
} from "../constants";

const initialState = { isLoading: false, fetchedBooks: [], error: "" };

const reducerFetchBooks = (prevState = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LOADING:
      return {
        ...prevState,
        isLoading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...prevState,
        isLoading: false,
        fetchedBooks: action.payload,
        error: "",
      };
    case FETCH_BOOKS_ERRORS:
      return {
        ...prevState,
        isLoading: false,
        fetchedBooks: [],
        error: action.payload,
      };

    default:
      return prevState;
  }
};
export default reducerFetchBooks;
