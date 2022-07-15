import React, { useState } from 'react'

import { BlogData } from '../../Blogdata';
import {
  Link
} from "react-router-dom";

const Course = () => {
    const [blogdata, setBlogData] = useState(BlogData)
  return (
    <>
       {
              blogdata.map((item, id) => {
                return (
                  <div className="col-lg-4" key={id}>

                    <div className="card h-100">
                    <img src={item.courseImg} className="img-fluid h-50" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-muted">{item.author}</p>
                      <h5 className="card-subtitle text-muted">Course</h5>
                      <Link to="/services" className='btn btn-primary mt-2'>Join for Free</Link>
                      
                    </div>

                    </div>
                  </div>
                )
              })
            }
    </>
  )
}

export default Course