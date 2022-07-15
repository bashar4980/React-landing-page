import React from 'react'


import Course from './common/Course';


const Services = () => {
 
  return (
    <>

      <section>
        <div className="container text-center my-4">
          <h2>Our Services</h2>
        </div>
        <div className="container mt-5">
          <div className="row gx-5 gy-5">
         <Course/>
          </div>
        </div>

      </section>
    </>
  )
}

export default Services