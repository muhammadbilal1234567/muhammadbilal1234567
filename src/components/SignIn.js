import React from "react";
import "./signup.scss";
import Navbar from "./Navbar";
const SignUp = () => {
  return (
    <>
      <Navbar />
      <div class="form_wrapper" style={{ borderRadius: "12px",marginTop:'200px' }}>
        <div class="form_container">
          <div class="title_container">
            <h2 style={{ color: "#007bff" }}>SignIn</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="USERNAME"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="PASSWORD"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <input
                  style={{ borderRadius: "12px" }}
                  style={{ backgroundColor: "#007bff" }}
                  class="button"
                  type="submit"
                  value="SignIn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;