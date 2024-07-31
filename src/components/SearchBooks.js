import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFetchBooks";

const SearchBooks = () => {
  const searchState = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(title));
  };

  const displayBooksResults = searchState.isLoading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : searchState.error !== "" ? (
    <p>{searchState.error}</p>
  ) : (
    searchState.fetchedBooks.map((data) => {
      return (
        <div className="card mb-2" key={data.id}>
          <div className="card-header">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target={`#${data.id}`}
                aria-expanded="false"
              >
                {data.volumeInfo.title}
              </button>
            </h5>
          </div>
          <div id={data.id} className="collapse" data-parent="#accordion">
            <div className="card-body">
              {data.volumeInfo.hasOwnProperty("imageLinks") && (
                <img
                  src={data.volumeInfo.imageLinks.thumbnail}
                  alt={data.volumeInfo.title}
                />
              )}
              <br />
              <h4 className="card-title">Titre: {data.volumeInfo.title}</h4>
              <h5 className="card-title">Auteurs: {data.volumeInfo.authors}</h5>
              <p className="card-text">
                Description: {data.volumeInfo.description}
              </p>
              <a
                className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
                href={data.volumeInfo.previewLink}
              >
                Plus d'infos
              </a>
              <button className="btn btn-outline-secondary ml-3">
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      );
    })
  );

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>indiquez le sujet du livre a rechercher sur Google API</p>

          <form
            className="form-inline justify-content-center"
            onSubmit={handleClick}
          >
            <div className="form-group">
              <input
                value={title}
                type="text"
                className="form-control"
                placeholder="Quoi rechercher ?"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group ml-3">
              <button
                className="btn btn-outline-secondary ml-3"
                onClick={handleClick}
              >
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "200px" }}>
        <div id="accordion">{displayBooksResults}</div>
      </div>
    </main>
  );
};

export default SearchBooks;
