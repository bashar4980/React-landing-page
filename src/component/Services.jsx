import React, { useState } from 'react'

import BlogData from '../Blogdata';
import {
  Link
} from "react-router-dom";



const Services = () => {
  const [blogdata, setBlogData] = useState(BlogData)
 
  return (
    <>

      <section>
        <div className="container text-center my-4">
          <h2>Our Services</h2>
        </div>
        <div className="container mt-5">
          <div className="row gx-5 gy-5">
          {
              blogdata.map((item, id) => {
                const {courseImg , title , author, Content} = item;

                return (
                  <div className="col-lg-4" key={id}>

                    <div className="card h-100">
                    <img src={courseImg} className="img-fluid h-50" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text text-muted">{author}</p>
                      <h5 className="card-subtitle text-muted">Course</h5>
                      <p>{title}</p>
                      <Link to={title} state={{courseImg , title , author, Content}} className='btn btn-primary mt-2'>Join for Free</Link>
                      
                    </div>

                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </section>
    </>
  )
}

export default Services