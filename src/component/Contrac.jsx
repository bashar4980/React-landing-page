import React from "react";
import { useForm } from "react-hook-form";
import '../App.css'

const Contract = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    trigger
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    alert("Thanks for your message");
  };
  return (
    <>
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name && "invalid"}`}
                  id="name"
                  placeholder="Enter Your Name ....."
                  {...register("name", {
                    required: "Name is Required",
                    minLength: {
                      value: 10,
                      message: "Minimum allowed length is 10",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum allowed length is 20",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                ></input>
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email && "invalid"}`}
                  id="email"
                  placeholder="Enter Your Email ....."
                  {...register("email", {
                    required: "Email is Required",
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                ></input>
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  className={`form-control ${errors.age && "invalid"}`}
                  id="age"
                  placeholder="Enter Your age ....."
                  {...register("age", {
                    required: "Age is Require",
                    min: {
                      value: 15,
                      message: "Minimum Required age is 15",
                    },
                    max: {
                      value: 50,
                      message: "Maximum allowed age is 50",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("age");
                  }}
                ></input>
                {errors.age && (
                  <small className="text-danger">{errors.age.message}</small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="pnumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="pnumber"
                  className={`form-control ${errors.pnumber && "invalid"}`}
                  id="pnumber"
                  placeholder="Enter Your Phone number ....."
                  {...register("pnumber", {
                    required: "Phone Number is Require",
                    pattern: {
                      value: /^[01][0-9]{10}$/,
                      message: "Only Number is permitted",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("pnumber");
                  }}
                ></input>
                {errors.pnumber && (
                  <small className="text-danger">
                    {errors.pnumber.message}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className={`form-control ${errors.message && "invalid"}`}
                  rows="5"
                  placeholder="Enter your message here"
                  {...register("message", {
                    required: "Phone Number is Require",
                    minLength: {
                      value: 20,
                      message: "Minimum allowed length is 20",
                    },
                    maxLength: {
                      value: 50,
                      message: "Maximum allowed length is 50",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("message");
                  }}
                ></textarea>

                {errors.pnumber && (
                  <small className="text-danger">
                    {errors.message.message}
                  </small>
                )}
              </div>

              <input type="submit" className="btn btn-primary w-100 mt-3" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contract;
