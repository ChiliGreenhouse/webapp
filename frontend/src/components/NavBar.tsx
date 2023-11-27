import React from "react";

interface Props {}

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success bg-opacity-25">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="../../assets/chili_icon.png" alt="icon" width="27"></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="data">
                Data
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="regulation">
                Regulation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="camera">
                Camera
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
