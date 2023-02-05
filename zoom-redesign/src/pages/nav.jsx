import { useState } from "react";
import "../style/nav.css";

function Nav() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="main-nav-container">
      <div className="secondary-header">
        <div className="zoom-logo-container">
          <img
            src="https://st2.zoom.us/static/6.3.11036/image/new/topNav/Zoom_logo.svg"
            alt="logo"
          />
        </div>
        <span className="nav-small-top-text">Join</span>
        <span
          className="nav-small-top-text"
          style={{ margin: "10px 50px 10px 20px" }}>
          Host
        </span>
        <div className="secondary-header-text-container">
          <span>Products</span>
          <span>Solutions</span>
          <span>Resources</span>
          <span>Plans & Pricing</span>
        </div>
        <div className="secondary-header-button-container">
          <button style={{ backgroundColor: "transparent" }}>Contact Sales</button>
          <button style={{ backgroundColor: "#0f5af6", color: "#fff" }}>Sign Up Free</button>
        </div>
        <div
          className={open ? "hamburger-close" : "hamburger"}
          onClick={handleClick}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={`${open ? "small-nav-container" : "none"}`}>
        <ul className="small-nav-ul">
          <li>
            <div style={{ height: "30px", width: "30px" }}>
              <img
                src="https://fontawesomeicons.com/lib/svg/search.svg"
                alt=""
              />
            </div>
            <p>Search</p>
          </li>
          <li>
            <p>Products</p> <span className="arrow"></span>
          </li>
          <li>
            <p>Solutions</p> <span className="arrow"></span>
          </li>
          <li>
            <p>Resources</p> <span className="arrow"></span>
          </li>
          <li>
            <p>Plans & Pricing</p>
          </li>
        </ul>
        <ul className="small-nav-ul">
          <li>
            <p>Support</p>
          </li>
          <li>
            <p>1.888.799.9666</p>
          </li>
          <li>
            <p>Request a Demo</p>
          </li>
          <li>
            <div className="small-nav-button-container">
              <button style={{ backgroundColor: "transparent" }}>
                Sign In
              </button>
              <button style={{ backgroundColor: "#0f5af6", color: "#fff" }}>
                Sing Up Free
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="big-nav-text-container">
        <ul className="nav-ul">
          <li>
            <div style={{ height: "30px", width: "30px" }}>
              <img
                src="https://fontawesomeicons.com/lib/svg/search.svg"
                alt=""
              />
            </div>
            <p>Search</p>
          </li>
          <li>
            <p>Support</p>
          </li>
          <li>
            <p>Support</p>
          </li>
          <li>
            <p>1.888.799.9666</p>
          </li>
          <li>
            <p>Request a Demo</p>
          </li>
          <li>
            <p>|</p>
          </li>
          <li>
            <p>Join</p>
          </li>
          <li>
            <p>Host</p>
          </li>
          <li>
            <p>Sign in</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
