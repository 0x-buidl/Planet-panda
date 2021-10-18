import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import { BsDiscord } from "react-icons/bs";
import headerImg from "../../images/headerImg.png";
// import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container justify-content-end">
          <div
            className="offcanvas offcanvas-end me-lg-4"
            tabIndex="-1"
            id="toggleNav"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <ul className="navbar-nav fs-4 justify-content-end ms-2 mb-lg-0">
              <li className="nav-item me-lg-2">
                <a
                  className="nav-link"
                  href="#roadMap"
                  //   onMouseDown={scrollTo("#rdMap")}
                >
                  Road Map
                </a>
              </li>
              <li className="nav-item me-lg-2">
                <a
                  className="nav-link"
                  href="https://twitter.com/PlanetPandaNFT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li className="nav-item me-lg-3 ">
                <a
                  className="nav-link"
                  href="https://discord.gg/WKqkqhv6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsDiscord />
                </a>
              </li>
              <li className="nav-item mt-1">
                <button type="button" className="btn btn-action fs-5 ">
                  Mint Now
                </button>
              </li>
            </ul>
          </div>

          <button type="button" className="btn btn-action fs-5 ">
            Connect Wallet
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#toggleNav"
            aria-controls="offcanvas"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="">
                <h1 className="hero-text mb-2">
                  <span>Planet</span> <br /> PANDA
                </h1>
                <p className="hero-desc">
                  Welcome to Planet Panda, <br />
                  <span>7500</span> uniquely generated Panda NFTs
                </p>
                <p className="sale-date">
                  Sale Date: <span> TBD</span>
                </p>
              </div>
            </div>
            <div className="col-md-5  d-flex">
              <img
                className="header-image ms-auto"
                src={headerImg}
                alt="firePanda"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
