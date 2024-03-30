import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <nav className="container-fluid navbar navbar-expand-lg  bg-secondary-subtle">
        <h2 className="navbar-brand ms-4 fs-1"><span className='text-danger'>RED</span><span className='text-black'>LINE</span></h2>
        <button className="navbar-toggler bg-danger me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-black fs-5" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;