import polymath_logo from "./images/polymath_logo.jpg";
import "./Navbar.css";
import React from "react";
import MediaQuery from "react-responsive";
import Menu from "./Menu";

function BootstrapNavbar() {
  return (
    <div>
      <MediaQuery query="(max-width: 767px)">
        <div>
          <header className="">
            <div className="image-center py-2">
              <div className="nav-sp px-4">
              <img src={polymath_logo} className="polymath-logo-sp" />
              </div>
            </div>
          </header>

          <div id="outer-container">
            <Menu
              right
              width={180}
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
              ï
            />
          </div>
        </div>
      </MediaQuery>

      <MediaQuery query="(min-width: 768px)">
        <div className="navbar-pc-wrapper py-3">
          <div className="navbar-width px-3 pt-3">
            <div className="navbar-pc navbar-font-size ">
              <div>
                <img src={polymath_logo} className="polymath-logo" />
              </div>
              <div>
                <a className="nav-link-decoration navbar-color" href="#home">
                  Home
                </a>
              </div>
              <div>
                <a className="nav-link-decoration navbar-color" href="#team">
                  Team
                </a>
              </div>
              <div>
                <a className="nav-link-decoration navbar-color" href="#value">
                  Value
                </a>
              </div>
              <div>
                <a
                  className="nav-link-decoration navbar-color"
                  href="#achievements"
                >
                  Achievements
                </a>
              </div>
              <div>
                <a className="nav-link-decoration navbar-color" href="#contact">
                  Contact
                </a>
              </div>
              <div>
                <a className="nav-link-decoration navbar-color" href="#social">
                  Social
                </a>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default BootstrapNavbar;
