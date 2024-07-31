import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addBooks,
  deleteAllBooks,
  deleteBook,
} from "../redux/actions/actionAddBooks";
import FlipMove from "react-flip-move";

const AddBooks = ({ libraryData, addBook, deleteBook, deleteAllBooks }) => {
  console.log(libraryData);

  const initialState = {
    title: "",
    author: "",
  };

  const [newData, setNewData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(newData);
    setNewData(initialState);
  };

  const displayData =
    libraryData.length > 0 ? (
      <FlipMove>
        {libraryData.map((data) => {
          return (
            <li
              key={data.id}
              className="list-group-item list-group-light d-flex justify-content-between"
            >
              <span>
                <strong>Titre: </strong> {data.title}
              </span>
              <span>
                <strong>Auteur: </strong> {data.author}
              </span>
              <button
                onClick={() => deleteBook(data.id)}
                className="btn btn-danger"
              >
                X
              </button>
            </li>
          );
        })}
      </FlipMove>
    ) : (
      <p className="text-center">Aucune data a afficher</p>
    );
  const deleteAllMyBooks = libraryData.length > 0 && (
    <div className="d-flex justify-content-center">
      <button onClick={deleteAllBooks} className="btn btn-danger mt-4 mb-5">
        Effacer tous les livres
      </button>
    </div>
  );

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                value={newData.title}
                type="text"
                className="form-control"
                placeholder="Titre"
                required
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                value={newData.author}
                type="text"
                className="form-control ml-3"
                placeholder="Auteur"
                required
                onChange={(e) =>
                  setNewData({ ...newData, author: e.target.value })
                }
              />
            </div>
            <div className="form-group ml-3">
              <button className="btn btn-outline-secondary ml-3">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">{displayData}</ul>
            {deleteAllMyBooks}
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (prevState) => {
  return {
    libraryData: prevState.library,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (param) => dispatch(addBooks(param)),
    deleteBook: (id) => dispatch(deleteBook(id)),
    deleteAllBooks: () => dispatch(deleteAllBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
