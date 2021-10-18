import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand nav-bar fs-3" href="www.google.com">Popular Diagn</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-link">
                            <li className="nav-item">
                                <a className="nav-link me-3" aria-current="page" href="www.google.com">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-3" href="www.google.com">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-3" href="www.google.com">Our Doctors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-3" href="www.google.com">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-3" href="www.google.com">Contact</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-primary btn-sm fw-bold me-2">Login</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;