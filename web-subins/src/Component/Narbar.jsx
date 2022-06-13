import React, { useState } from "react";
import logo from "../images/logo.png";
import flag from "../images/flag.jpg";
import { Link } from "react-router-dom";

function Narbar() {
  const [show, setShow] = useState(false);
  // const handleClick = function () {
  //   show = "block";

  // };

  return (
    <div className="header-container">
      <a href="/" className="header-logo">
        <img src={logo} alt="logo" />
      </a>
      <div
        className="mobile-nav"
        id="menu-toggle"
        onClick={() => setShow((s) => !s)}
      >
        <i className="fa-solid fa-bars "></i>&nbsp;
      </div>

      <ul className="menu" style={{ display: show ? "block" : "none" }}>
        <li className="menu-item">
          <Link to="/" className="menu-link">
            <i className="fa-brands fa-instagram"></i>&nbsp; TRANG CHỦ
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/login" className="menu-link">
            <i className="fa-solid fa-right-from-bracket"></i>&nbsp; ĐĂNG NHẬP /
            ĐĂNG KÝ
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/services" className="menu-link">
            <i className="fa-solid fa-gem"></i>&nbsp; DỊCH VỤ
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/faq" className="menu-link">
            <i className="fa-solid fa-circle-question"></i>&nbsp; HƯỚNG DẪN
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/news" className="menu-link">
            <i className="fa-solid fa-newspaper"></i>&nbsp; TIN TỨC
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/blog" className="menu-link">
            <i className="fa-solid fa-book"></i>&nbsp; BLOG
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/discount" className="menu-link text-primary">
            <i className="fa-solid fa-coins"></i>&nbsp; discount
          </Link>
        </li>

        <Link to="/" className="menu-link" title="Switch to English">
          <img src={flag} alt="" className="menu-flag" />
        </Link>
      </ul>
    </div>
  );
}

export default Narbar;
