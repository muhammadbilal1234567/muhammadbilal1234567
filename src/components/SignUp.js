import React from "react";
import "./signup.scss";
import Navbar from "./Navbar";
const SignUp = () => {
  return (
    <>
      <Navbar />
      <div class="form_wrapper" style={{ borderRadius: "12px",marginTop:'100px',zIndex:'2' }}>
        <div class="form_container">
          <div class="title_container">
            <h2 style={{ color: "#007bff" }}>SignUp</h2>
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
                    placeholder="NAME&SURNAME"
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
                    placeholder="USERNAME"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                  </span>
                  <input
                    style={{ borderRadius: "12px" }}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                  <i class="fa fa-phone" aria-hidden="true"></i>

                  </span>
                  <input
                    style={{ borderRadius: "12px" }}
                    type="text"
                    name="password"
                    placeholder="TELEPHONE"
                    required
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    style={{ borderRadius: "12px" }}
                    type="password"
                    name="password"
                    placeholder="PASSWORD"
                    required
                  />
                </div>
                <div class="input_field checkbox_option">
                  <input
                    type="checkbox"
                    id="cb1"
                    style={{ borderRadius: "12px" }}
                  />
                  <label for="cb1">I agree with terms and conditions</label>
                </div>
                <input
                  style={{ borderRadius: "12px" }}
                  style={{ backgroundColor: "#007bff" }}
                  class="button"
                  type="submit"
                  value="Register"
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
