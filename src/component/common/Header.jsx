import React from 'react'

import './Common.css'
import {
    Link
} from "react-router-dom";
const Header = ({img , text}) => {
  return (
   <>
   <section className="container mt-5">
        <div className="row d-flex align-items-center">
            <div className="col-lg-6">
                <h1>{text}</h1>
                <p className="py-2">Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                
                <Link to="/services" className='btn btn-primary btn-lg'>Join for Free</Link>
            </div>
            <div className="col-lg-6" id='header'>
                <img className="img-fluid w-100 animated"src={img} alt="img" />
            </div>
        </div>
    </section>
   </>
  )
}

export default Header