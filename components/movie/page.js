import React from "react";
// import Modal from "react-modal";

function AllMovies() {
  return (
    <div>
      <div className='container movie-section text-white w-100 my-3 w-100'>
        <div className='movie m-2'>
          <div>
            <img src='{image.poster}' alt='Image' />
          </div>
          <div className='movie-info'>
            <h3 className='fw-bold'>Title</h3>
            <div className='d-flex flex-column justify-content-start align-items-start gap-1'>
              <span className='orange fw-bold'> genres</span>
              <span className='green'> Released </span>
            </div>
          </div>
          <div className='overview'>
            <h4>Title</h4>
            <div className='mb-2'>
              {/* Map genres */}
              <span className='mbr-3 green'>genres</span>
            </div>

            <div className='d-flex flex-row align-items-center justify-content-center'>
              <button className='btn btn-warning w-100 fw-bold'>
                {" "}
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <Modal
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
          },
        }}
      >
        <ReactPlayer></ReactPlayer>
      </Modal> */}
    </div>
  );
}

export default AllMovies;
