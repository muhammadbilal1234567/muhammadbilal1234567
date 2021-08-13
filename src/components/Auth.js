import React from "react";
import "./signup.scss";
import Navbar from "./Navbar";
const Auth = () => {
  return (
    <>
      <Navbar />
      <div class="form_wrapper" style={{ borderRadius: "12px",marginTop:'200px' }}>
        <div class="form_container">
          <div class="title_container">
            <h2 style={{ color: "#007bff" }}>2 FACTOR ATHENTICATION</h2>
            <p className='text-muted'>ENTER 6 DIGIT CODE FROM GOOGLE AUTHENTICATE TO ENSURE THAT YOUR LOGIN IS SAFE</p>
          </div>
          <div class="row clearfix">
            <div class="">
              <form>
                <div class="input_field">
                  <input
                    type="text"
                    name="name"
                    placeholder="6 DIGIT CODE"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <input
                  style={{ borderRadius: "12px" }}
                  style={{ backgroundColor: "#007bff" }}
                  class="button"
                  type="submit"
                  value="SUBMIT"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Auth;