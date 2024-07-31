import { ADD_BOOKS, DELETE_ALL_BOOKS, DELETE_BOOK } from "../constants"

export const addBooks = book => {
    return {
        type: ADD_BOOKS,
        payload:book
    }
}
export const deleteBook = id => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}
export const deleteAllBooks = () => {
    return {
        type: DELETE_ALL_BOOKS,
    }
}
