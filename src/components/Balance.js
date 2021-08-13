import React from "react";
import Navbar from './Navbar'

const Balance = () => {
  return (
    <>
     <Navbar/>
      {/* <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#007bff",
          position: "fixed",    
        }}
      > */}
      <div
        className="container"
        style={{
          marginTop: "50px",
          backgroundColor: "white",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "20px",
        }}
      >
       <div class="row p-2"><div class="col-2"><h6>Total Balance</h6><div class="row"><h1 class="text-md-center">5,123.57</h1></div></div><div class="col-md-1 d-flex align-items-center pl-0 pl--md-1"><div class="dropdown"><button class="btn btn-primary dropdown-toggle" type="button">USD</button></div></div><div class="col-md-2 d-flex align-items-center pl-1 pl-md-1"><p class="text-muted text-2" style={{marginTop:'9px'}}>14 Vaults | 43 Wallets</p></div><div class="col-md-4 rounded text-center p-2" style={{background: 'gainsboro'}}><h6 class=" text-mute">Ask your freinds to join &amp; earn rewards!</h6><p class="text-gray">Get the invitation link by clicking on the Settings icon</p></div><div class="col-md-3 text-center"><a class="active" href="#"><i class="fa fa-bars fa-1x my-5 mx-3" aria-hidden="true"></i></a><a href="#"><i class="fa fa-cog fa-1x my-5 mx-3" aria-hidden="true"></i></a><a href="#"><i class="fa fa-user fa-1x my-5 mx-3" aria-hidden="true"></i></a></div></div>
      </div>
    </>
  );
};

export default Balance;
