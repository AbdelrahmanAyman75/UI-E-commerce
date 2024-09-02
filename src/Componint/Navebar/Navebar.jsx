import React from "react";
import { Link } from "react-router-dom";


export default function Navebar() {


  

  return (
    <>

      <nav id="nave" className="navbar navbar-expand-lg w-100       ">
        <div className=" container container-fluid">
          <Link className="navbar-brand" to="/">
           <p className="fw-bold h1"> Store</p>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav w-100 mt-3 me-auto  mb-lg-0  ">
              <li className="nav-item  ">
                <Link className="nav-link active" aria-current="page" to="/Home">
                  <p className="a">Home</p>
                </Link>
              </li>
              

              <li className="nav-item ">
                <Link className="nav-link" to="Register">
                  <p className="a">Register</p>
                </Link>
              </li>
            </ul>

            <div className="me-auto d-flex justify-content-between align-items-center  ">
              <Link className="nav-link" to="">
                <i className="fa-solid text-white fa-cart-shopping fa-beat-fade me-3">
                  <span className="bg-main position-absolute "></span>
                </i>
              </Link>
              <Link className="nav-link" to="">
                <i className="fa-solid text-white fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </>
  );

}
