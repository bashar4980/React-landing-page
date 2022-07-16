import React from 'react';
import { useLocation, useParams } from 'react-router-dom'


const Service = () => {
    const {title} = useParams()
    const location = useLocation();
 
    return (
        <div>
              <>
                    <div className='container-fluid pt-5'>

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={location.state.courseImg} className="img-fluid w-100" alt="..." />
                                </div>
                                <div className="col-lg-6 pt-5">
                                    <h4>{title}</h4>
                                    <h4>{location.state.title}</h4>
                                    <p style={{ fontSize: "15px" }} className="text-muted">{location.state.author}</p>
                                    <button className='btn btn-primary btn-lg' style={{ borderRadius: "0px" }}> Enroll Now</button>
                                </div>
                            </div>
                            <div className="Couese_info pt-5">
                                <h1 className='text-center'>Course Info....</h1>
                                <p style={{ fontSize: "20px", textAlign: "justify" }} >
                                    {location.state.Content.slice(0, 500)}
                                </p>
                                <p style={{ fontSize: "20px", textAlign: "justify" }} >
                                    {location.state.Content.slice(500, 10000)}
                                </p>
                            </div>
                        </div>

                    </div>

                </>
        </div>
    )
}

export default Service