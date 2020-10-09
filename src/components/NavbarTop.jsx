import React from "react";
import { NavLink } from "react-router-dom";

function NavbarComponents() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <NavLink className="navbar-brand js-scroll-trigger" to="/">
        <span className="d-block d-lg-none text-uppercase">
          <span>
            <img
              className="phone-nav rounded-circle mx-auto mb-2"
              src="https://i.ibb.co/n1JQvtq/file2.jpg"
              alt=""
            />
          </span>
          Imam Saiquit
        </span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="https://i.ibb.co/n1JQvtq/file2.jpg"
            alt=""
          />
        </span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/" exact>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/experience">
              Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/works">
              Works
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/education">
              Education
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/skills">
              Skills
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/interests">
              Interests
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComponents;
