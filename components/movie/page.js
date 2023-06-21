"use client";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // fetch api
    fetch("http://localhost:8080/api/v1/movies/")
      .then((res) => res.json())
      .then((movie) => setMovies(movie))
      .catch((error) => {
        console.error("Failed to fetch data", error);
      });
  }, []);

  const handleWatchNow = (movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      <div className='container movie-section text-white w-100 my-3 w-100'>
        {/* Loop through all the movies */}
        {movies.map((movie) => (
          // movie card
          <div key={movie._id} className='movie m-2'>
            <div>
              <img src={movie.poster} alt='Image' />
            </div>
            <div className='movie-info'>
              <h3 className='fw-bold'>{movie.title}</h3>
              <div className='d-flex flex-column justify-content-start align-items-start gap-1'>
                <span className='orange fw-bold'>{movie.genres[0]}</span>
                <span className='green'> Released {movie.releaseDate}</span>
              </div>
            </div>
            <div className='overview'>
              <h4>{movie.title}</h4>
              <div className='mb-2'>
                {/* Map genres */}
                {movie.genres.map((genre) => (
                  <span key={genre.id} className='mbr-3 green'>
                    {genre}{" "}
                  </span>
                ))}
              </div>

              <div className='d-flex flex-row align-items-center justify-content-center'>
                <button
                  className='btn btn-warning w-100 fw-bold'
                  onClick={() => handleWatchNow(movie)}
                >
                  {" "}
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Video Modal'
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
          content: {
            width: "850px",
            height: "85vh",
            margin: "auto", // Center the modal horizontally
            padding: "0px",
            border: "none",
            overflow: "hidden",
          },
        }}
      >
        {/* selectedMovie = movie */}

        {selectedMovie && (
          <div>
            <ReactPlayer
              url={selectedMovie.trailerLink}
              height='85vh'
              width='850px'
              controls={true}
              className='bg-dark overflow-hidden'
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default AllMovies;
