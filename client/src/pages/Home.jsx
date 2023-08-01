import React from "react";
import og from "../assets/images/og.jpg"
import "../stylePages/home/App.css"
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <section className="home-section"> 

        {/* home  */}
            <div className="hero-text">
                <div className="header">
                    <h1>What Book Are You Looking For</h1>
                </div>
                <div className="sub-header">
                    <p>Not sure what to read next? Explore our Catalog of Public  Domain Books With Our Editors</p>
                </div>
                <div className="explore">
                    <button>
                        <Link to="/details">
                        Explore Now
                        </Link></button>
                </div>
            </div>
            <div className="image">
                <img src={og} alt="" />
            </div>
        </section>
    )
}

export default Home;