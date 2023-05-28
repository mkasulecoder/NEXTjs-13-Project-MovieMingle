import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className='w-100'>
      <div className='d-flex flex-row justify-content-between align-items-center w-100'>
        <h1 className='fw-bold text-white'>MovieMingle</h1>
        <form id='form'>
          <input
            type='text'
            id='search'
            className='search'
            placeholder='Search'
            // onChange={handleOnSearch}
          />
        </form>
      </div>
    </div>
  );
}

export default Header;
