import React, { useState } from "react";
import "../stylePages/navbar/App.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [mobile, setMobile] = useState(false);

  const handleMobile = (e) => {
    e.preventDefault();
    setMobile(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  return (
    <section className="navbar-section">

<div className="hamburger" onClick={handleMobile}>
                    <i className="fa-solid fa-bars"></i>
                  </div>
                  <div className="desktop">
      <nav>
        <ul>
        <li>
          <Link to="/">Bookstore</Link>
        </li>
        <li>
          <Link to="/details">Book Details</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/wishlist">Wish List</Link>
        </li>
        </ul>
      </nav>
      </div>

{/* mobile menu */}
<div className={`mobile-menu `}>

<div
                  className={`mobile_menu d-block d-lg-none ${
                    mobile ? "mob-nav" : ""
                  }`}
                >

      <nav>
      <i
                        className="fa-solid fa-x fa-2xl"
                        onClick={() => setMobile(false)}
                      ></i>
                      <ul>
        <li>
          <Link to="/">Bookstore</Link>
        </li>
        <li>
          <Link to="/details">Book Details</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/wishlist">Wish List</Link>
        </li>
        </ul>
      </nav>
      </div>
      </div>

    </section>
  );
};

export default Navbar;
