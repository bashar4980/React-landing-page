import React from 'react'

import './Common.css'

const Wrapper = (props) => {
  return (
    <section style={{background:" #ebf3ff"}} className="py-5 my-5">
   <div className="container" >
    <div className=" row">
    <div className="col-lg-6 col-md-6" id='header'>
        <img className="img-fluid animated" src={props.Imagesrc} alt=""  />
      </div>
      <div className="col-lg-6 pt-5">
          <div className="container-text">
           
            <h1>{props.heading}</h1>
            <p style={{fontSize:"18px"}} className="my-3">{props.text} </p>
            <button className='btn btn-primary btn-lg' style={{ borderRadius:"0px"}}>Join for Free</button>
            
          </div>
      </div>
      
    </div>
  </div>
   </section>
  )
}

export default Wrapper