import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Career
            </a>
          </li>
        </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" fohtmlr="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps={
  title:"Set Title Here",
}
