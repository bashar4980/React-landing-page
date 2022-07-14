import React from 'react'
import {
    Link
} from "react-router-dom";
const Header = ({img}) => {
  return (
   <>
   <section className="container mt-5">
        <div className="row d-flex align-items-center">
            <div className="col-lg-6">
                <h1><span className='text-primary'>Learn </span>without limits</h1>
                <p>Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                
                <Link to="/services" className='btn btn-primary btn-lg'>Join for Free</Link>
            </div>
            <div className="col-lg-6">
                <img className="img-fluid w-100"src={img} alt="img" />
            </div>
        </div>
    </section>
   </>
  )
}

export default Header