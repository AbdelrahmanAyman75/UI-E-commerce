import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <header className="position-fixed top-0 bottom-0 start-0 end-0 z-n1">
      <div className="layer">
        <div className="w-100">
        <div className="px-3 text-white   ">
          <div className="content   w-50 container ">
            <h1 className=" fw-bold">Welcome </h1>
            <h3> <span className="">E-Commerce </span> Landing Page</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, odit error maiores autem, veniam excepturi beatae
              alias mollitia aut neque asperiores et blanditiis quaerat quia quo
              unde consectetur perspiciatis nobis.
            </p>

            <Link to={"/Home"}>
              <button className=" started-btn btn">Get Started</button>
            </Link>
          </div>
        </div>
        </div>
      </div>
      </header>
         
    </>
  );
}
