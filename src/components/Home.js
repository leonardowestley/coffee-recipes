import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/contactform"></Link>
            <button>Contact Form</button>
            <Link to=""></Link>
            <button>Contact Link</button>
        </div>
    );
}
export default Home;