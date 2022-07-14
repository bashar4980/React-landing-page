import React from 'react'
import './Navbar.css'
import {
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container">
                    <a className="navbar-brand text-primary " href="#">Learn More</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className='nav-link'>Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className='nav-link'>About</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/contract" className='nav-link'>Contract</Link>
                            </li>
                            

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar